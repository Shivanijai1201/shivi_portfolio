import 'dotenv/config'

const DEFAULT_CLIENT_URLS = [
  'http://localhost:5174',
  'https://shivanijayshwal.in',
  'https://www.shivanijayshwal.in',
  'https://portfolio-e6d9c.web.app',
]

const parseOrigins = (value) =>
  (value || '')
    .split(',')
    .map((origin) => origin.trim().replace(/\/+$/, ''))
    .filter(Boolean)

const configuredOrigins = parseOrigins(process.env.CLIENT_URL)

export const env = {
  port: process.env.PORT || 5000,
  clientUrls: Array.from(new Set([...configuredOrigins, ...DEFAULT_CLIENT_URLS])),
  smtp: {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  contactReceiverEmail: process.env.CONTACT_RECEIVER_EMAIL || process.env.SMTP_USER,
}
