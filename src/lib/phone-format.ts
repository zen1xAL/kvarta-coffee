export function formatBelarusPhoneInput(value: string): string {
  const digits = value.replace(/\D/g, "");

  let core = digits;
  if (core.startsWith("375")) core = core.slice(3);
  else if (core.startsWith("80")) core = core.slice(2);

  core = core.slice(0, 9);
  if (!core) return value.startsWith("+") ? "+375 " : value;

  let res = "+375";
  if (core.length > 0) res += ` (${core.slice(0, 2)}`;
  if (core.length >= 2) res += `) ${core.slice(2, 5)}`;
  if (core.length >= 5) res += `-${core.slice(5, 7)}`;
  if (core.length >= 7) res += `-${core.slice(7, 9)}`;

  return res;
}
