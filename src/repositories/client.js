import axios from 'axios';

const client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

client.interceptors.request.use(
  async config => {
    const token = '# Your token goes over here;';
    if (token) {
      config.headers.accessToken = token;
    }
    // console.log('config', JSON.stringify(config));
    return config;
  },
  function (error) {
    console.log('req. error', JSON.stringify(error));
    return Promise.reject(error);
  },
);

client.interceptors.response.use(
  res => {
    // console.log('response', res.data);
    return res;
  },
  error => {
    if (error.message === 'Network Error') {
      console.log('Network Error', JSON.stringify(error?.response?.status));
      if (error?.response?.status === 504) {
        throw {
          message: 'Something went wrong. Please try again later.',
        };
      } else {
        throw {
          message:
            'You are not connected to the internet. Verify your connection and then try again.',
        };
      }
    }
    if (error.response) {
      console.log(
        'error.response.status',
        JSON.stringify(error.response.status),
      );
      if (error.response.status === 500) {
        throw {
          message: 'Something went wrong. Please try again later.',
        };
      }
      if (error.response.status === 401) {
        // logout logic
      }
      if (error.response.status === 403) {
        // redirect user to some home page since that action is not allowed
      }
      throw {
        ...error.response.data,
        statusCode: error.response.status,
      };
    }
    throw {
      message: 'Something went wrong. Please try again later.',
    };
  },
);

export default client;
