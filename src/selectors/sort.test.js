import SORTING_TYPE from '../actions/sorting-type';
import sort from './sort';

it(`sorting by POPULAR doesn't touch the original offers`, () => {
  const offers = [
    {name: `1`},
    {name: `2`}
  ];
  expect(sort(offers, SORTING_TYPE.POPULAR)).toBe(offers);
});

it(`sorting by PRICE_HIGH_TO_LOW creates new array and sorts by price from high to low`, () => {
  const offers = [
    {name: `a`, price: 2},
    {name: `b`, price: 3}
  ];

  const sorted = sort(offers, SORTING_TYPE.PRICE_HIGH_TO_LOW);
  expect(sorted).not.toBe(offers);
  expect(sorted).toMatchObject([
    {name: `b`, price: 3},
    {name: `a`, price: 2}
  ]);
});

it(`sorting by PRICE_LOW_TO_HIGH creates new array and sorts by price from low to high`, () => {
  const offers = [
    {name: `a`, price: 2},
    {name: `b`, price: 3}
  ];

  const sorted = sort(offers, SORTING_TYPE.PRICE_LOW_TO_HIGH);
  expect(sorted).not.toBe(offers);
  expect(sorted).toMatchObject([
    {name: `a`, price: 2},
    {name: `b`, price: 3}
  ]);
});

it(`sorting by TOP_RATED_FIRST creates new array and sorts by rating from high to low`, () => {
  const offers = [
    {name: `a`, price: 2, rating: 3},
    {name: `b`, price: 3, rating: 2}
  ];
  const sorted = sort(offers, SORTING_TYPE.TOP_RATED_FIRST);
  expect(sorted).not.toBe(offers);
  expect(sorted).toMatchObject([
    {name: `a`, price: 2, rating: 3},
    {name: `b`, price: 3, rating: 2}
  ]);
});
