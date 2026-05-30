import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const PORT = Number(process.env.PORT ?? 8000)
const MONGO_URI = process.env.MONGO_URI ?? 'mongodb://localhost:27017/octofit'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/', (_req, res) => {
  res.json({ message: 'OctoFit Tracker API is running.' })
})

mongoose
  .connect(MONGO_URI)
  .then(() => console.log(`Connected to MongoDB at ${MONGO_URI}`))
  .catch((error) => {
    console.error('MongoDB connection error:', error)
    process.exit(1)
  })

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`)
})
