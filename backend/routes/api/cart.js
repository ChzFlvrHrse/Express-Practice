const express = require('express');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const router = express.Router();

const { Cart } = require('../../db/models');

router.get('/:userId', async (req, res) => {
    const { userId } = req.params;
    const { user } = req;

    console.log(userId, user)

    const cart = await Cart.findAll({
        where: { userId: userId }
    });

    if (cart.length && userId === user) {
        return res.json({Cart: cart});
    } else {
        res.status(404);
        res.json({
            message: "Users cart couldn't be found or you're not authorized to view this cart",
            statusCode: 404
        })
    }
});

router.post('/:currUserId', async (req, res) => {
    const { currUserId } = req.params;
    const { item, price, size, quantity, userId } = req.body;

    const { user } = req;
    const currId = user.id;

    if (currUserId === currId.toString()) {
        await Cart.create({ item, price, size, quantity, userId });
        const findCart = await Cart.findAll({
            where: { userId: userId }
        })
        return res.json(findCart);
    } else {
        res.status(404);
        res.json({
            message: "User cart couldn't be found or you're not authorized to add to this cart",
            statusCode: 404
        })
    }
});

router.put('/:currUserId/update', async (req, res) => {
    const { currUserId } = req.params;
    const { item, price, size, quantity, userId } = req.body;
    const { user } = req;
    const currId = user.id;

    const currCart = await Cart.findOne({
        where: {item, size, userId}
    });

    if (currCart && currUserId === currId.toString()) {
        const updateCart = currCart.set({ item, price, size, quantity, userId });
        await updateCart.save();
        const newCart = await Cart.findAll({where: {userId}});
        return res.json(newCart);
    } else {
        res.status(404);
        return res.json({
            message: "User cart couldn't be found or you're not authorized to update this cart",
            statusCode: 404
        })
    }
});

module.exports = router;
