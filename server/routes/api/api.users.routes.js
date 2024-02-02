const router = require('express').Router();
const { User } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const users = await User.findAll({ order: [['max_result', 'DESC']] });
    console.log(users, 'server users');
    res.json({ users });
  } catch ({ message }) {
    res.json({ type: 'get themes', message });
  }
});

module.exports = router;
