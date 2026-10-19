import fs from "fs";
import os from "os";
import path from "path";
import crypto from "crypto";
import type { ValidatedLead } from "./validation";

export interface StoredLead extends ValidatedLead {
  id: string;
  createdAt: string;
}

export interface SaveLeadResult {
  success: boolean;
  duplicate?: boolean;
  lead?: StoredLead;
  error?: string;
}

export const DEDUPLICATION_WINDOW_MS = 10 * 60 * 1000;
const STORAGE_FILE = path.join(os.tmpdir(), "leads.json");

let memoryLeads: StoredLead[] = [];
let initialized = false;

function loadLeadsFromDisk(): StoredLead[] {
  try {
    if (fs.existsSync(STORAGE_FILE)) {
      const content = fs.readFileSync(STORAGE_FILE, "utf-8");
      const parsed = JSON.parse(content);
      if (Array.isArray(parsed)) return parsed as StoredLead[];
    }
  } catch {
    // Fallback to memory
  }
  return [];
}

function persistLeadsToDisk(leads: StoredLead[]): void {
  try {
    fs.writeFileSync(STORAGE_FILE, JSON.stringify(leads, null, 2), "utf-8");
  } catch {
    // Non-blocking in serverless environments
  }
}

function ensureLoaded(): void {
  if (!initialized) {
    const diskLeads = loadLeadsFromDisk();
    if (diskLeads.length > memoryLeads.length) memoryLeads = diskLeads;
    initialized = true;
  }
}

export function isRecentDuplicate(
  normalizedPhone: string,
  windowMs = DEDUPLICATION_WINDOW_MS,
  now = Date.now(),
): boolean {
  ensureLoaded();
  return memoryLeads.some((lead) => {
    if (lead.normalizedPhone !== normalizedPhone) return false;
    const leadTime = new Date(lead.createdAt).getTime();
    return now - leadTime >= 0 && now - leadTime < windowMs;
  });
}

export function saveLead(
  lead: ValidatedLead,
  options?: { now?: number; windowMs?: number },
): SaveLeadResult {
  ensureLoaded();
  const now = options?.now ?? Date.now();
  const windowMs = options?.windowMs ?? DEDUPLICATION_WINDOW_MS;

  if (isRecentDuplicate(lead.normalizedPhone, windowMs, now)) {
    return {
      success: false,
      duplicate: true,
      error: "Заявка с этого номера уже отправлена. Подождите 10 минут перед повторной отправкой.",
    };
  }

  const storedLead: StoredLead = {
    ...lead,
    id: crypto.randomUUID(),
    createdAt: new Date(now).toISOString(),
  };

  memoryLeads.push(storedLead);
  persistLeadsToDisk(memoryLeads);

  return { success: true, lead: storedLead };
}

export function getStoredLeads(): StoredLead[] {
  ensureLoaded();
  return [...memoryLeads];
}

export function clearStoredLeads(): void {
  memoryLeads = [];
  initialized = true;
  try {
    if (fs.existsSync(STORAGE_FILE)) fs.unlinkSync(STORAGE_FILE);
  } catch {
    // Ignore cleanup error
  }
}
