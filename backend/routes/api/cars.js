const express = require('express');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const router = express.Router();

const { Car } = require('../../db/models');

router.get('/', async (req, res) => {
    const cars = await Car.findAll();
    if (cars.length) {
        return res.json({Cars: cars});
    } else {
        res.status(404);
        res.json({
            message: "Cars couldn't be found",
            statusCode: 404
        })
    }
})

router.get('/model/:modelSign', async (req, res) => {
    const { modelSign } = req.params
    const model = `Model ${modelSign.toUpperCase()}`

    const cars = await Car.findAll({
        where: {
            model: { [Op.startsWith]: [model] }
        }
    })
    if (cars.length) {
        return res.json({Cars: cars})
    } else {
        res.status(404);
        res.json({
            message: "Model couldn't be found",
            statusCode: 404
        })
    }
})

module.exports = router;
