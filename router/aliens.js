const express = require('express');
const router = express.Router()
const Alien = require('../models/alien')

//Create a new Alien
router.post('/', async(req, res) => {
  const alien = new Alien({
    name: req.body.name,
    tech: req.body.tech,
    sub: req.body.sub
  })

  try{
    const savedAlien = await alien.save()
    res.json(savedAlien)
  }catch(err){
    res.send('Error ' + err)
  }

})

// Get all Aliens
router.get('/', async(req, res) => {
  try{
    const aliens = await Alien.find()
    res.json(aliens)
  }catch(err){
    res.send('Error ' + err)
  }
})

// Get an Alien by ID
router.get('/:id', async(req, res) => {
  try{
    const alien = await Alien.findById(req.params.id)
    res.json(alien)
  }catch(err){
    res.send('Error ' + err)
  }
})

//Update an Alien by ID
router.patch('/:id', async(req, res) => {
  try{
    const alien = await Alien.findById(req.params.id)
    alien.name = req.body.name
    alien.tech = req.body.tech
    alien.sub = req.body.sub
    const updatedAlien = await alien.save()
    res.json(updatedAlien)
  }catch(err){
    res.send('Error ' + err)
  }
})

//Delete an Alien by ID
router.delete('/:id', async(req, res) => {
  try{
    const alien = await Alien.findById(req.params.id)
    await alien.remove()
    res.send('Alien Deleted')
  }catch(err){
    res.send('Error ' + err)
  }
})

module.exports = router
