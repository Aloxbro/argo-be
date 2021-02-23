const express = require('express');
const router = express.Router();
const Crew = require('../models/crew');

//GET
router.get('/', async (req, res) => {
    try {
        const crew = await Crew.find();
        res.json(crew);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
//POST
router.post('/', async (req, res) => {
    const crew = new Crew({
        name: req.body.name
    });

    try {
        const newCrewMember = await crew.save();
        res.status(201).json(newCrewMember);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;