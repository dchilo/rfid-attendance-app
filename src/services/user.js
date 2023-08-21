import { apiURL } from '@/app/config';

const getLogin = async (credentials) => {
  return await fetch(`${apiURL}/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  })
    .then((response) => response.json())
    .then((data) => {
      const user = data.data;
      console.log(user);
      // Hacer algo con el token recibido, como guardarlo en el almacenamiento local (localStorage) o en el estado de tu aplicación
      return user;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

const verifyToken = async (token) => {
  return await fetch(`${apiURL}/auth/verifytoken`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const user = data;
      return user;
    })
    .catch((error) => {
      return error;
    });
};

export { getLogin, verifyToken };
