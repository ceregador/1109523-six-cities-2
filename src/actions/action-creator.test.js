import ActionCreator from './action-creator';
import ACTION_TYPE from './action-type';

it(`returns expected SET_CITY action`, () => {
  expect(ActionCreator.setCity(`City`)).toMatchObject({
    type: ACTION_TYPE.SET_CITY,
    payload: `City`
  });
});

it(`returns expected SET_SORTING_TYPE action`, () => {
  expect(ActionCreator.setSortingType(`Popular`)).toMatchObject({
    type: ACTION_TYPE.SET_SORTING_TYPE,
    payload: `Popular`
  });
});

it(`returns expected UPDATE_ACTIVE_CARD action`, () => {
  expect(ActionCreator.updateActiveCard(1)).toMatchObject({
    type: ACTION_TYPE.UPDATE_ACTIVE_CARD,
    payload: 1
  });
});
