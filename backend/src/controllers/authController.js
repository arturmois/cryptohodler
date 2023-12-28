/* eslint-disable no-unused-vars */
import jwt from 'jsonwebtoken';

export function doLogin(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (email === 'arturmoiscontato@gmail.com'
    && password === '123456') {
    const token = jwt.sign({ id: 1 }, process.env.JWT_SECRET, {
      expiresIn: parseInt(process.env.JWT_EXPIRES)
    });
    res.json({ token });
  }
  else
    res.sendStatus(401);
}

export function doLogout(req, res, next) {
  res.sendStatus(401);
}