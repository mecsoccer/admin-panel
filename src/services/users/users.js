import axios from 'axios';

export const usersService = () => {
  const url = 'https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb';

  return axios.create({ baseURL: url });
};

