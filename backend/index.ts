import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import { errorMiddleware } from './utils/error.js'
import postRoutes from './routes/post.route.js'
import userRoutes from './routes/auth.route.js'
import cookieParser from 'cookie-parser'
dotenv.config()



const app = express()

// Middlewares

app.use(express.json())
app.use(cookieParser())
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

app.use('/api', userRoutes)
app.use('/api/posts', postRoutes)

// Error handling middleware

app.use(errorMiddleware)

