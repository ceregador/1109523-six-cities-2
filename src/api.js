import axios from 'axios';
import history from './history';
import {BASE_API_URL, isPrivateRoute, ApiRoutes} from './constants/route-constants';

const createAPI = () => {
  const api = axios.create({
    baseURL: BASE_API_URL,
    timeout: 15000,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onError = (err) => {
    if ((err.status === 401 || (err.response && err.response.status === 401)) && isPrivateRoute(err.config.method, err.config.url)
    ) {
      history.push(ApiRoutes.LOGIN);
    }

    throw err;
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};


export default createAPI;
