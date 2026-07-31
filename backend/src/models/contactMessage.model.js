function toTrimmedString(value) {
  return value == null ? '' : String(value).trim()
}

export class ContactMessage {
  constructor({ name, email, subject, message } = {}) {
    this.name = toTrimmedString(name)
    this.email = toTrimmedString(email)
    this.subject = toTrimmedString(subject)
    this.message = toTrimmedString(message)
  }

  static EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  validate() {
    const errors = []

    if (!this.name) errors.push('Name is required.')
    if (!this.email) errors.push('Email is required.')
    else if (!ContactMessage.EMAIL_REGEX.test(this.email)) errors.push('Please provide a valid email address.')
    if (!this.subject) errors.push('Subject is required.')
    if (!this.message) errors.push('Message is required.')

    return errors
  }
}
