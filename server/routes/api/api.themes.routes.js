const router = require('express').Router()
const {Theme, Question} = require('../../db/models')

router.get('/', async (req, res)=> {
    try {
        const themes = await Theme.findAll({include: Question})
        res.json({themes})
    } catch ({message}) {
        res.json({type: 'get themes', message})
    }
})

module.exports = router