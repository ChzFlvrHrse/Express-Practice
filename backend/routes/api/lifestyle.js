const express = require('express');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const router = express.Router();

const { Lifestyle } = require('../../db/models');

router.get('/', async (req, res) => {
    const lifestyle = await Lifestyle.findAll();
    if (lifestyle.length) {
        return res.json({Lifestyle: lifestyle})
    } else {
        res.status(404);
        res.json({
            message: "Lifestyle couldn't be found",
            statusCode: 404
        })
    }
})

module.exports = router;
