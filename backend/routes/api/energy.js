const express = require('express');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const router = express.Router();

const { Energy } = require('../../db/models');

router.get('/', async (req, res) => {
    const energy = await Energy.findAll();
    if (energy.length) {
        return res.json({Energy: energy})
    } else {
        res.status(404);
        res.json({
            message: "Energy couldn't be found",
            statusCode: 404
        })
    }
})

module.exports = router;
