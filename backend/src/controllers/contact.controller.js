import { sendMail } from '../services/mailer.service.js'
import { contactEmailTemplate } from '../templates/contactEmail.template.js'
import { env } from '../config/env.js'

export async function sendContactMessage(req, res, next) {
  try {
    const { name, email, subject, message } = req.contactMessage

    await sendMail({
      to: env.contactReceiverEmail,
      subject: `Portfolio Contact: ${subject}`,
      html: contactEmailTemplate({ name, email, subject, message }),
      replyTo: email,
    })

    res.status(200).json({ success: true, message: 'Your message was sent successfully.' })
  } catch (error) {
    error.publicMessage = 'Could not send your message right now. Please try again later.'
    next(error)
  }
}
