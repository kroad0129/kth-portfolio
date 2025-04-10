const express = require('express')
const router = express.Router()
const Message = require('../models/Message')

// GET /api/messages
router.get('/', async (req, res) => {
    const messages = await Message.find().sort({ createdAt: -1 })
    res.json(messages)
})

// POST /api/messages
router.post('/', async (req, res) => {
    const { text } = req.body
    if (!text) return res.status(400).json({ error: '메시지가 비어있어요!' })

    const newMessage = new Message({ text })
    await newMessage.save()
    res.status(201).json(newMessage)
})

module.exports = router
