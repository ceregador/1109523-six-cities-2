import {getUniqueCitiesFromOffers, getOffersByCityName} from './offers-extractor';

it(`getUniqueCitiesFromOffers reduces number of equal cities to 1`, () => {
  const offers = [{city: {name: `City`}}, {city: {name: `City`}}];
  expect(getUniqueCitiesFromOffers(offers)).toEqual([{name: `City`}]);
});

it(`getUniqueCityNamesFromOffers returns array of unique cities`, () => {
  const offers = [
    {city: {name: `City1`}},
    {city: {name: `City1`}},
    {city: {name: `City2`}},
    {city: {name: `City2`}},
    {city: {name: `City3`}}
  ];
  expect(getUniqueCitiesFromOffers(offers)).toEqual([
    {name: `City1`},
    {name: `City2`},
    {name: `City3`}
  ]);
});

it(`getOffersByCityName returns empty array if offers not found`, () => {
  const offers = [
    {
      city: {name: `City1`},
      offers: [{}]
    },
    {
      city: {name: `City2`},
      offers: [{}]
    }
  ];
  expect(getOffersByCityName(offers, `Aaa`)).toEqual([]);
});

it(`getOffersByCityName returns expected array of the offers`, () => {
  const offers = [
    {
      id: 1,
      city: {name: `City1`}
    },
    {
      id: 2,
      city: {name: `City2`}
    },
    {
      id: 3,
      city: {name: `City1`}
    }
  ];
  expect(getOffersByCityName(offers, `City1`)).toEqual([
    {id: 1, city: {name: `City1`}},
    {id: 3, city: {name: `City1`}}
  ]);
});
