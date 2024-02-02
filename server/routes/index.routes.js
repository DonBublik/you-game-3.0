const express = require('express');
const router = express.Router();
const apiAuthRouter = require('./api/api.auth.routes');
const apiThemesRouter = require('./api/api.themes.routes');
const apiAnswersRouter = require('./api/api.answer.routes');
const apiUsersRouter = require('./api/api.users.routes');

router.use('/api/auth', apiAuthRouter);
router.use('/api/themes', apiThemesRouter);
router.use('/api/answers', apiAnswersRouter);
router.use('/api/users', apiUsersRouter);

module.exports = router;
