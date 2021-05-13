const express = require('express')
const router = express.Router()
const items = require('../models/items')
const app = express()

//find all items
router.get('/', async (req, res) => {
    try {
        const item = await items.find()
        console.log('Items fetched')
        res.json(item)
    } catch (error) {
        res.send('Error occured: ' + error)
    }
})

//findByID
router.get('/:id', async (req, res) => {
    try {
        const item = await items.findById(req.params.id)
        console.log('Items fetched')
        res.json(item)
    } catch (error) {
        res.send('Error occured: ' + error)
    }
})

//Post One Element
router.post('/', async (req, res) => {
    const { name, price, rating } = req.body

    console.log(req.body)
    const obj = new items({
        name: name,
        price: price,
        rating: rating
    })
    try {
        const a1 = await obj.save()
        res.json(a1)
    } catch (error) {
        res.json("Error: " + error)
    }
})

module.exports = router 