const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');
const generateTokens = require('../../utils/authUtils');
const configJWT = require('../../middleware/configJWT');

router.post('/sign-in', async (req, res) => {
  let user;
  try {
    const { email, password } = req.body;

    user = await User.findOne({ where: { email } });
    if (!user) {
      res.json({ message: 'Email или Пароль неверный' });
      return;
    }
    const isSame = await bcrypt.compare(password, user.password);
    if (!isSame) {
      res.json({ message: 'Email или Пароль неверный' });
      return;
    }
    const { accessToken, refreshToken } = generateTokens({
      user: { id: user.id, email: user.email, img: user.img, name:user.name },
    });

    res.cookie('access', accessToken, {
      maxAge: 1000 * 60 * 5,
      httpOnly: true,
    });
    res.cookie('refresh', refreshToken, {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    });
    res.json({ message: 'success', user });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.post('/sign-up', async (req, res) => {
  let user;
  try {
    const {email, name, img, password, rpassword } = req.body;
    if (password !== rpassword) {
      res.json({ message: 'Пароли не совпадают!' });
      return;
    }
    user = await User.findOne({ where: { email } });
    if (user) {
      res.json({ message: 'Такой пользователь уже есть!' });
      return;
    }
    const hash = await bcrypt.hash(password, 10);
    user = await User.create({email, name, password: hash, img ,max_result: 0 });

    const { accessToken, refreshToken } = generateTokens({
      user: { email:user.email, id: user.id, name: user.name, img: user.img , max_result:user.max_result},
    });

    res.cookie('access', accessToken, {
      maxAge: 1000 * 60 * 5,
      httpOnly: true,
    });
    res.cookie('refresh', refreshToken, {
      maxAge: 1000 * 60 * 60 * 12,
      httpOnly: true,
    });

    res.json({ message: 'success', user });
  } catch ({ message }) {
    res.json({ message });
  }
});

router.get('/check', async (req, res) => {
  if (res.locals.user) {
    const user = await User.findOne({ where: { id: res.locals.user.id } });
    res.json({ user });
    return;
  }
  res.json({});
});

router.get('/logout', (req, res) => {
  res.clearCookie(configJWT.access.type).clearCookie(configJWT.refresh.type);
  res.json({ message: 'success' });
});

module.exports = router;
