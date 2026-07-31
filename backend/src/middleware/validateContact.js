import { ContactMessage } from '../models/contactMessage.model.js'

export function validateContact(req, res, next) {
  const contactMessage = new ContactMessage(req.body || {})
  const errors = contactMessage.validate()

  if (errors.length > 0) {
    return res.status(400).json({ success: false, message: errors[0], errors })
  }

  req.contactMessage = contactMessage
  next()
}
