export const BASE_API_URL = `https://htmlacademy-react-2.appspot.com/six-cities`;

export const Routes = {
  MAIN_PAGE: `/`,
  LOGIN_PAGE: `/login`,
  FAVORITES: `/favorites`,
  OFFER_DETAILS: `/offer/:offerId`,

};

export const ApiRoutes = {
  HOTELS: `/hotels`,
  LOGIN: `/login`,
  COMMENTS: `/comments`,
  FAVORITE: `/favorite`,
};

const privateRoutes = {
  get: [
    Routes.FAVORITES,
    ApiRoutes.FAVORITE,
  ],
  post: [
    ApiRoutes.FAVORITE,
    Routes.OFFER_DETAILS
  ]
};

export const isPrivateRoute = (method, url) => {
  if (method) {
    const methodRoutes = privateRoutes[method.toLowerCase()];
    if (methodRoutes) {
      return !!methodRoutes.find(
          (route) => url === BASE_API_URL + route
          || url.startsWith(BASE_API_URL + route));
    }
  }

  return false;
};
