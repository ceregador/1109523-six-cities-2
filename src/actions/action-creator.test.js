import ActionCreator from './action-creator';
import ACTION_TYPE from './action-type';

it(`returns expected SET_CITY action`, () => {
  expect(ActionCreator.setActiveCity(`City`)).toMatchObject({
    type: ACTION_TYPE.SET_CITY,
    payload: `City`
  });
});

it(`returns expected GET_CITY_OFFERS action`, () => {
  const action = ActionCreator.getOffers(`Amsterdam`);
  expect(action.type).toBe(ACTION_TYPE.GET_CITY_OFFERS);
  expect(action.payload.length).toBe(4);
});
