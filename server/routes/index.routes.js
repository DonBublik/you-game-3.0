const express = require('express');
const router = express.Router();
const apiAuthRouter = require('./api/api.auth.routes')
const apiThemesRouter = require('./api/api.themes.routes')

router.use('/api/auth', apiAuthRouter);
router.use('/api/themes', apiThemesRouter)

module.exports = router;
