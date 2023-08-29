const express = require('express');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const router = express.Router();

const { Cart } = require('../../db/models');

router.get('/:currUserId', async (req, res) => {
    const { currUserId } = req.params;
    const { user } = req;
    const currId = user.id

    const cart = await Cart.findAll({
        where: { userId: currUserId }
    });

    if (cart.length && currUserId === currId.toString()) {
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
        const cart = await Cart.findAll({
            where: { userId: userId }
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

router.delete('/:currUserId/:itemId/delete', async (req, res) => {
    const { currUserId, itemId } = req.params;
    const { user } = req;
    const currId = user.id;

    const deleteItem = await Cart.findByPk(itemId);

    if (deleteItem && currUserId === currId.toString()) {
        await deleteItem.destroy();
        return res.json({
            message: "Successfully deleted",
            statusCode: 200
        })
    } else {
        res.status(400);
        res.json({
            message: "Item couldn't be found",
            statusCode: 404
        })
    }
});

module.exports = router;
