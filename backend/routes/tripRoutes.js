const express = require('express');
const Trip = require('../models/Trip');
const router = express.Router();

router.get('/', async (req, res) => {
  const trips = await Trip.find();
  res.json(trips);
});

router.post('/', async (req, res) => {
  const { destination, startDate, endDate, notes } = req.body;
  const trip = new Trip({ destination, startDate, endDate, notes });
  await trip.save();
  res.json({ message: "Trip added successfully!" });
});

router.delete('/:id', async (req, res) => {
  await Trip.findByIdAndDelete(req.params.id);
  res.json({ message: "Trip deleted!" });
});

module.exports = router;

