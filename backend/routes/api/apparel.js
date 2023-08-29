const express = require('express');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const router = express.Router();

const { Apparel } = require('../../db/models');

router.get('/', async (req, res) => {
    const apparel = await Apparel.findAll();
    if (apparel.length) {
        return res.json({Apparel: apparel});
    } else {
        res.status(404);
        res.json({
            message: "Apparel couldn't be found",
            statusCode: 404
        })
    }
})

router.get('/:category', async (req, res) => {
    const { category } = req.params;
    const gender = category[0].toUpperCase() + category.slice(1);

    const cat = await Apparel.findAll({
        where: { category: gender }
    });
    if (cat.length) {
        return res.json({Apparel: cat});
    } else {
        res.status(404);
        res.json({
            message: `${category}'s apparel couldn't be found`,
            statusCode: 404
        })
    }
})

module.exports = router;
