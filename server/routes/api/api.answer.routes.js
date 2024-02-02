const router = require('express').Router();
const { Theme, Question, Game } = require('../../db/models');


router.post('/', async (req, res) => {
    try {
      const { id } = req.body;
        console.log(id);
      const game = await Game.create({ user_id:res.locals.user.id, question_id:id});
      const question  = await Question.findOne({where: {id:id}, include: Game})
      
     
      res.json({ message: 'success', question});
    } catch ({ message }) {
      res.json({ message });
    }
  });


module.exports = router;
