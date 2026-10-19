---
trigger: always_on
---

PROJECT SPECIFICATION: KVARTA COFFEE ROASTERY (MINSK)

1. VISUAL SYSTEM

- Strictly implement the tokens, colors, 4px radii, italic serif headings, and dark gallery aesthetic from DESIGN.md (Кварта).
- Tone: warm, honest, simple, no corporate pathos. Target audience: 25-45 years old from mobile Instagram and Yandex ads.

2. MANDATORY FACTS AND CONTENT

- Brand: Обжарка Кварта, Минск. Маленькая мастерская, обжаривают партиями по 5 кг с 2019 года. Основатели Аня и Дмитрий (бывшие бариста).
- Freshness: Обжаривают по четвергам, по пятницам развозят по Минску. Зерно приходит к клиенту на 1-3 день после обжарки.
- Catalog and Exact Prices in BYN:
  1. Эфиопия Иргачеффе: цветочный, бергамот, светлая обжарка, 250 г - 32 BYN
  2. Колумбия Уила: карамель, красное яблоко, 250 г - 29 BYN
  3. Бразилия Серрадо: орех, шоколад, под эспрессо, 250 г - 26 BYN
  4. Дрип-пакеты, ассорти: 10 штук - 18 BYN
- Subscription: Подписка - 2 пачки по 250 г раз в месяц, доставка бесплатно - 54 BYN / мес.
- Pickup and Delivery: Мастерская: Минск, ул. Короля, 9 (самовывоз). Часы: пн-пт 8:00-20:00, сб-вс 10:00-18:00. Доставка по Минску в пятницу, от 50 BYN бесплатно.

3. LEAD FORM AND POST /api/lead REQUIREMENTS

- Form fields: name (Имя), phone (Телефон), interest (Что интересует: подписка, разовый заказ, вопрос), comment (Комментарий).
- Clicking on any product card or subscription button scrolls to the form and pre-selects the relevant interest and comment.
- Belarus Phone Validation (Pure TS): Validate Belarusian mobile numbers +375 with operator codes 25, 29, 33, 44 followed by 7 digits. Show a clear human-readable hint if invalid.
- 10-Minute Deduplication: Prevent duplicate leads from the same normalized phone number within 10 minutes (disable button while submitting on client + verify timestamp on backend).
- Ad Attribution (UTM): Capture utm_source, utm_medium, utm_campaign, utm_content, utm_term, referrer, and page URL on the client and include them in POST /api/lead.
- Serverless Storage: Save leads to path.join(os.tmpdir(), 'leads.json') + in-memory Map fallback so it never throws EROFS on Vercel read-only filesystem. Optional non-blocking Telegram Bot notification if TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID env vars are set.
- Error UX: If submission fails, display a clear message explaining what to do (retry or contact directly).
