const router = require('express').Router();
const sessionRouter = require('./session');
const userRouter = require('./users');
const carRouter = require('./cars');
const energyRouter = require('./energy');
const accessoryRouter = require('./accessory');
const apparelRouter = require('./apparel');
const lifestyleRouter = require('./lifestyle');
const cartRouter = require('./cart');
const { restoreUser } = require('../../utils/auth.js');

router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', userRouter);

router.use('/cars', carRouter);

router.use('/energy', energyRouter);

router.use('/accessory', accessoryRouter);

router.use('/apparel', apparelRouter);

router.use('/lifestyle', lifestyleRouter);

router.use('/cart', cartRouter);

router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});

module.exports  = router;
