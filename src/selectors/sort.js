import SORTING_TYPE from '../actions/sorting-type';

const sort = (offers, sortType) => {
  switch (sortType) {
    case SORTING_TYPE.POPULAR:
      return offers;

    case SORTING_TYPE.PRICE_HIGH_TO_LOW:
      return offers.slice().sort((offer1, offer2) => offer2.price - offer1.price);

    case SORTING_TYPE.PRICE_LOW_TO_HIGH:
      return offers.slice().sort((offer1, offer2) => offer1.price - offer2.price);

    case SORTING_TYPE.TOP_RATED_FIRST:
      return offers.slice().sort((offer1, offer2) => offer2.rating - offer1.rating);
  }

  return offers;
};

export default sort;
