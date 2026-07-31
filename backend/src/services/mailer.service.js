import nodemailer from 'nodemailer'
import { env } from '../config/env.js'

const transporter = nodemailer.createTransport({
  host: env.smtp.host,
  port: env.smtp.port,
  secure: env.smtp.port === 465,
  auth: {
    user: env.smtp.user,
    pass: env.smtp.pass,
  },
})

export function sendMail({ to, subject, html, replyTo }) {
  return transporter.sendMail({
    from: `"Shivani Jayshwal Portfolio" <${env.smtp.user}>`,
    to,
    subject,
    html,
    replyTo,
  })
}
