import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

export function doLogin(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  if (email === 'arturmoiscontato@gmail.com'
    && bcrypt.compareSync(password, '$2a$12$ZbWzRRrzjrocjjSlxQsJXOJhzLiAx4heZKpJnV8kUil/E/oiXPvb2')) {
    const token = jwt.sign({ id: 1 }, process.env.JWT_SECRET, {
      expiresIn: parseInt(process.env.JWT_EXPIRES)
    });
    res.json({ token });
  }
  else
    res.sendStatus(401);
}

const blacklist = [];

export function doLogout(req, res) {
  const token = req.headers['authorization'];
  blacklist.push(token);
  res.sendStatus(200);
}

export function isBlacklisted(token) {
  return blacklist.some(t => t === token);
}