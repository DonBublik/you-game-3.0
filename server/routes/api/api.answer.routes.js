const router = require('express').Router();
const { Theme, Question, Game , User} = require('../../db/models');


router.post('/', async (req, res) => {
    try {
      const { id, score } = req.body;
      console.log(score);
        console.log(id);
        const game = await Game.create({ user_id:res.locals.user.id, question_id:id});
        const user  = await User.findOne({where: {id:res.locals.user.id}})
        const newScore = user.max_result+score
      const updateUser = await User.update({max_result:newScore},{where: {id:res.locals.user.id}})
      const question  = await Question.findOne({where: {id:id}, include: Game})
      
     
      res.json({ message: 'success', question});
    } catch ({ message }) {
      res.json({ message });
    }
  });


module.exports = router;
