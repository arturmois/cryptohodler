/* eslint-disable no-unused-vars */
export function doLogin(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  console.log(email, password);
  if (email === 'arturmoiscontato@gmail.com'
    && password === '123456') {
    res.sendStatus(200);
  }
  else
    res.sendStatus(401);
}

export function doLogout(req, res, next) {
  res.sendStatus(401);
}