import ActionCreator from './action-creator';
import ACTION_TYPE from './action-type';

it(`returns expected FETCH_OFFERS action`, () => {
  expect(ActionCreator.fetchOffers([{id: 1}])).toMatchObject({
    type: ACTION_TYPE.FETCH_OFFERS,
    payload: [{id: 1}]
  });
});

it(`returns expected FETCH_REVIEWS action`, () => {
  expect(ActionCreator.fetchReviews([{rating: 1, comment: 1}])).toMatchObject({
    type: ACTION_TYPE.FETCH_REVIEWS,
    payload: [{rating: 1, comment: 1}]
  });
});

it(`returns expected AUTHORIZE action`, () => {
  expect(ActionCreator.authorize({name: `User`})).toMatchObject({
    type: ACTION_TYPE.AUTHORIZE,
    payload: {name: `User`}
  });
});

it(`returns expected ADD_TO_FAVORITES action`, () => {
  expect(ActionCreator.addToFavorites({offerId: 1, isFavorite: false})).toMatchObject({
    type: ACTION_TYPE.ADD_TO_FAVORITES,
    payload: {offerId: 1, isFavorite: false}
  });
});

it(`returns expected SET_CITY action`, () => {
  expect(ActionCreator.setCity(1)).toMatchObject({
    type: ACTION_TYPE.SET_CITY,
    payload: 1
  });
});

it(`returns expected SET_CITY action`, () => {
  expect(ActionCreator.switchCity(`City`)).toMatchObject({
    type: ACTION_TYPE.SWITCH_CITY,
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
