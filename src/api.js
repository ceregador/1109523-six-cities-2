import axios from 'axios';
import history from './history';
import {BaseApiUrl, isPrivateRoute, ApiRoutes} from './constants/routeConstants';

const createAPI = () => {
  const api = axios.create({
    baseURL: BaseApiUrl,
    timeout: 5000,
    withCredentials: true
  });

  const onSuccess = (response) => response;

  const onError = (err) => {
    if ((err.status === 401 || (err.response && err.response.status === 401)) && isPrivateRoute(err.config.method, err.config.url)
    ) {
      history.push(ApiRoutes.LOGIN);
    }
  };

  api.interceptors.response.use(onSuccess, onError);

  return api;
};


export default createAPI;
