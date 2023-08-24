const express = require('express');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const router = express.Router();

const { Cart } = require('../../db/models');

router.post('/:userId', async (req, res) => {
    const { item, price, size, quantity, userId } = req.params;
    const { user } = req;

    if (userId === user) {
        await Cart.create({item, price, size, quantity, userId});
        const findCart = await Cart.findAll({
            where: { userId: userId }
        })
        return res.json(findCart)
    } else {
        res.status(404);
        res.json({
            message: "User cart couldn't be found or you're not authorized to view this cart",
            statusCode: 404
        })
    }
});

router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    const { user } = req;

    console.log(userId, user)

    const cart = await Cart.findAll({
        where: { userId: userId }
    })

    if (cart.length && userId === user) {
        return res.json({Cart: cart})
    } else {
        res.status(404);
        res.json({
            message: "User cart couldn't be found or you're not authorized to view this cart",
            statusCode: 404
        })
    }
});

module.exports = router;
