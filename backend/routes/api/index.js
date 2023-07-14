const router = require('express').Router();
const sessionRouter = require('./session')
const userRouter = require('./users')
const { restoreUser } = require('../../utils/auth.js');

router.use(restoreUser);

router.use('/session', sessionRouter);

router.use('/users', userRouter);

router.post('/test', (req, res) => {
    res.json({ requestBody: req.body });
});

module.exports  = router;
