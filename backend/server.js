const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(cors())
app.use(express.json())

const messageRoutes = require('./routes/messages')
app.use('/api/messages', messageRoutes)

// MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('✅ MongoDB 연결 성공')
        app.listen(process.env.PORT, () => {
            console.log(`🚀 서버 실행 중: http://localhost:${process.env.PORT}`)
        })
    })
    .catch(err => console.error('❌ DB 연결 실패:', err.message))
