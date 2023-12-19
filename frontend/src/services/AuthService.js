export function doLogin(email, password) {
  return new Promise((response, reject) => {
    if (email === 'arturmoiscontato@gmail.com'
    && password === '123456') {
      response(true);
    }
    reject('Usuário e/ou senha inválidos!');
  });

}

export function doLogout() {

}