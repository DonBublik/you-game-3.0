const router = require('express').Router();
const { Theme, Question, Game } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const themes = await Theme.findAll({
        include: {
            model: Question,
            include: Game
        },
    });
    console.log(themes);
    res.json({ themes });
  } catch ({ message }) {
    res.json({ type: 'get themes', message });
  }
});

module.exports = router;
