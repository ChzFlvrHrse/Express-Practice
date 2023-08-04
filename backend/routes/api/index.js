const router = require('express').Router();
const sessionRouter = require('./session');
const userRouter = require('./users');
const carRouter = require('./cars');
const { restoreUser } = require('../../utils/auth.js');

router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', userRouter);

router.use('/cars', carRouter);

router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});

module.exports  = router;
