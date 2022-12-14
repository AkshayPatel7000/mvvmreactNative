import client from './client';

export const login = async ({email, password}) => {
  const {data} = await client.post('/sessions', {
    email,
    password,
  });

  return data;
};
// https://jsonplaceholder.typicode.com/posts
export const getlogin = async ({id}) => {
  const {data} = await client.get('/posts/' + id);
  return data;
};
