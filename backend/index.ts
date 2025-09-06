import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { errorMiddleware } from './utils/error.js'


dotenv.config()

const app = express()

// Middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const uri = process.env.ATLAS_URI as string // connection string



mongoose.connect(uri)
    .then(() => {
        console.log('Connected to MongoDB')

        app.listen(4000, () => {
            console.log('Server is running on port 4000')
        })
    }).catch(err => { console.log(err) })


// Routes 

app.get('/', (req, res) => {
    res.send('Hello world!')
})

// Error handling middleware

app.use(errorMiddleware)

