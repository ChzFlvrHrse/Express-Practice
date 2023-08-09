const express = require('express');
const router = express.Router();

const { User, Car } = require('../../db/models');

router.get('/', async (req, res) => {
    const cars = await Car.findAll({
        include: User,
        where: { ownerId: 1 }
    });
    if ({ Cars: cars }) {
        return res.json(cars);
    } else {
        res.status(404);
        res.json({
            message: "Cars couldn't be found",
            statusCode: 404
        })
    }
})

module.exports = router;
