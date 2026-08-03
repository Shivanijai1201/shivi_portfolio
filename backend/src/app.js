import express from 'express'
import cors from 'cors'
import { env } from './config/env.js'
import contactRoutes from './routes/contact.routes.js'
import { errorHandler, notFoundHandler } from './middleware/errorHandler.js'

const app = express()

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || env.clientUrls.includes(origin.replace(/\/+$/, ''))) {
        callback(null, true)
      } else {
        callback(new Error(`Not allowed by CORS: ${origin}`))
      }
    },
  })
)
app.use(express.json())

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' })
})

app.use('/api/contact', contactRoutes)

app.use(notFoundHandler)
app.use(errorHandler)

export default app
