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





module.exports = router