import reducer from './reducer';
import ACTION_TYPE from '../actions/action-type';

it(`action SET_CITY sets currentCityName properly`, () => {
  expect(reducer({
    activeCityName: `oldCity`
  },
  {
    type: ACTION_TYPE.SET_CITY,
    payload: `NewCity`
  })).toHaveProperty(`activeCityName`, `NewCity`);
});

it(`action GET_CITY_OFFERS sets cityOffers properly`, () => {
  expect(reducer({
    cityOffers: []
  },
  {
    type: ACTION_TYPE.GET_CITY_OFFERS,
    payload: [
      {city: {name: `City1`}},
      {city: {name: `City2`}}
    ]
  })).toHaveProperty(`cityOffers`, [
    {city: {name: `City1`}},
    {city: {name: `City2`}}
  ]);
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
