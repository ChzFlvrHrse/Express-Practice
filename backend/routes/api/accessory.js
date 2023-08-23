const express = require('express');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const router = express.Router();

const { Accessory } = require('../../db/models');

router.get('/', async (req, res) => {
    const accessories = await Accessory.findAll();
    if (accessories.length) {
        return res.json({Accessories: accessories});
    } else {
        res.status(404);
        res.json({
            message: "Vehicle accessories couldn't be found",
            statusCode: 404
        })
    }
})

router.get('/:modelSign', async (req, res) => {
    const { modelSign } = req.params
    const model = `Model ${modelSign}`

    const modelAcc = await Accessory.findAll({
        where: { model: model }
    });
    if (modelAcc.length) {
        return res.json({Accessories: modelAcc});
    } else {
        res.status(404);
        res.json({
            message: `${model} accessories couldn't be found`,
            statusCode: 404
        })
    }
})

module.exports = router;
