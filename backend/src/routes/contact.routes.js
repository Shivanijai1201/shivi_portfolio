import { Router } from 'express'
import { sendContactMessage } from '../controllers/contact.controller.js'
import { validateContact } from '../middleware/validateContact.js'

const router = Router()

router.post('/', validateContact, sendContactMessage)

export default router
