const express = require('express');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const router = express.Router();

const { Cart } = require('../../db/models');

router.get('/', async (req, res) => {
    const { user } = req;
    const userId = user.id

    const cart = await Cart.findAll({
        where: { userId }
    });

    if (cart.length) {
        return res.json({Cart: cart});
    } else {
        res.status(404);
        res.json({
            message: "Users cart couldn't be found or you're not authorized to view this cart",
            statusCode: 404
        })
    }
});

router.post('/new', async (req, res) => {
    // const { currUserId } = req.params;
    const { item, price, size, quantity, userId } = req.body;

    const { user } = req;
    const currId = user.id;

    if (userId === currId) {
        await Cart.create({ item, price, size, quantity, userId });
        const cart = await Cart.findAll({
            where: { userId }
        })
        return res.json({Cart: cart});
    } else {
        res.status(404);
        res.json({
            message: "User cart couldn't be found or you're not authorized to add to this cart",
            statusCode: 404
        })
    }
});

router.put('/update', async (req, res) => {
    const { item, price, size, quantity, userId } = req.body;
    const { user } = req;
    const currUser = user.id;

    const currCart = await Cart.findOne({
        where: {item, size, userId}
    });

    if (currCart && userId === currUser) {
        const updateCart = currCart.set({ item, price, size, quantity, userId });
        await updateCart.save();
        const newCart = await Cart.findAll({where: { userId }});
        return res.json({Cart: newCart});
    } else {
        res.status(404);
        return res.json({
            message: "User cart couldn't be found or you're not authorized to update this cart",
            statusCode: 404
        })
    }
});

router.delete('/:itemId/delete', async (req, res) => {
    const { itemId } = req.params;
    const { user } = req;
    const currUser = user.id;

    const deleteItem = await Cart.findByPk(itemId);
    const userId = deleteItem.userId;

    if (deleteItem && userId === currUser) {
        await deleteItem.destroy();
        const cart = await Cart.findAll({
            where: { userId }
        });
        return res.json({Cart: cart})
    } else {
        res.status(400);
        res.json({
            message: "Item couldn't be found",
            statusCode: 404
        })
    }
});

module.exports = router;
