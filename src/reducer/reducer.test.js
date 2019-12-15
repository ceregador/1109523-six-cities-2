import reducer from './reducer';
import ACTION_TYPE from '../actions/action-type';

it(`action FETCH_OFFERS sets offers`, () => {
  expect(reducer({},
      {
        type: ACTION_TYPE.FETCH_OFFERS,
        payload: [{
          id: 1,
          city: {name: `City`}
        }]
      })).toMatchObject({
    offers: [{
      id: 1,
      city: {name: `City`}}],
    cities: [{name: `City`}],
    activeCityName: `City`
  });
});

it(`action AUTHORIZE sets isAuthorized and user`, () => {
  expect(reducer({isAuthorized: false}, {
    type: ACTION_TYPE.AUTHORIZE,
    payload: {
      name: `user`
    }
  })).toMatchObject({
    isAuthorized: true,
    user: {name: `user`}
  });
});

it(`action SET_CITY sets activeCityName properly`, () => {
  expect(reducer({
    activeCityName: `oldCity`
  },
  {
    type: ACTION_TYPE.SET_CITY,
    payload: `newCity`
  })).toHaveProperty(`activeCityName`, `newCity`);
});

it(`action UPDATE_ACTIVE_CARD sets activeOfferId if the previous value was NULL`, () => {
  expect(reducer({
    activeOfferId: null
  },
  {
    type: ACTION_TYPE.UPDATE_ACTIVE_CARD,
    payload: 1
  })).toHaveProperty(`activeOfferId`, 1);
});

it(`action UPDATE_ACTIVE_CARD updates activeOfferId correctly`, () => {
  expect(reducer({
    activeOfferId: 2
  },
  {
    type: ACTION_TYPE.UPDATE_ACTIVE_CARD,
    payload: 1
  })).toHaveProperty(`activeOfferId`, 1);
});
