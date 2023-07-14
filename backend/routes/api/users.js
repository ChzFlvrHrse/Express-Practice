const express = require('express');

const { setTokenCookie, requireAuth } = require('../../utils/auth')
const { User } = require("../../db/models")

const router = express.Router();

router.post('/', async (req, res) => {
    const { email, firstName, lastName, password, username } = req.body;
    const user = await User.signup({ username, firstName, lastName, email, password });

    await setTokenCookie(res, user);

    return res.json({ user });
})

module.exports = router;
