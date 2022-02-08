const express = require('express');
const router = express.Router();
const User = require('../models/User');

// login user
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username, password });

    if (!user) {
      return res
        .status(400)
        .json({ msg: 'There is no user with this credentials' });
    }

    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Server error', error });
  }
});

// register user
router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (user) {
      return res
        .status(400)
        .json({ msg: 'There is already a user with such credentials' });
    }

    const newUser = new User({
      username,
      password,
    });

    await newUser.save();

    res.status(200).json({ msg: 'User saved successfully' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: 'Server error', error });
  }
});

module.exports = router;
