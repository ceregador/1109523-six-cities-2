import React from 'react';
import {connect, connectAdvanced} from 'react-redux';
import RentObjectDetails from './rent-object-details.jsx';
import Renderer from 'react-test-renderer';
import PageHeader from '../pageHeader/page-header.jsx';
import Rating from '../rating/rating.jsx';
import ReviewList from '../reviewList/review-list.jsx';
import ReviewForm from '../reviewForm/review-form.jsx';
import OffersMap from '../offersMap/offers-map.jsx';
import CardList from '../cardList/card-list.jsx';

jest.mock(`../rating/rating.jsx`);
jest.mock(`../reviewList/review-list.jsx`);
jest.mock(`../reviewForm/review-form.jsx`);
jest.mock(`../offersMap/offers-map.jsx`);
jest.mock(`../cardList/card-list.jsx`);
jest.mock(`../pageHeader/page-header.jsx`);

it(`renders placeholder if offer is undefined and connects`, () => {
  const tree = Renderer
    .create(
        <RentObjectDetails
          isAuthorized={false}
          offer={null}
          addToFavorites={jest.fn()}
          fetchDataForHotel={jest.fn()}
          match={{params: {offerId: `1`}}}
          activeCity={null}
          cityOffers={[]}
        />)
    .toJSON();

  expect(connect).toHaveBeenCalledTimes(1);
  expect(connect).toHaveBeenCalledWith(expect.any(Function), expect.any(Object));

  const mapStateToProps = connect.mock.calls[0][0];
  const mappedProps = mapStateToProps({offers: [], cities: []});
  expect(mappedProps).toHaveProperty(`offer`);
  expect(mappedProps).toHaveProperty(`activeCity`);
  expect(mappedProps).toHaveProperty(`cityOffers`);
  expect(mappedProps).toHaveProperty(`isAuthorized`);

  const mapDispatchToProps = connect.mock.calls[0][1];
  expect(mapDispatchToProps).toHaveProperty(`addToFavorites`);
  expect(mapDispatchToProps).toHaveProperty(`fetchDataForHotel`);

  expect(connectAdvanced).toHaveBeenCalledWith(RentObjectDetails);

  expect(tree).toMatchSnapshot();
});

it(`renders and connects correctly`, () => {
  const tree = Renderer
    .create(
        <RentObjectDetails
          isAuthorized={true}
          offer={{
            id: 1,
            name: ``,
            images: [],
            equipment: [],
            host: {
              avatarUrl: ``,
              name: ``,
              isPro: true},
            rating: 1,
            price: 1,
            type: ``,
            description: ``,
            bedroomsCount: 1,
            maxGuestsCount: 1,
            isPremium: false,
            isBookmarked: false
          }}
          addToFavorites={jest.fn()}
          fetchDataForHotel={jest.fn()}
          match={{params: {offerId: `1`}}}
          activeCity={{name: ``, coordinates: []}}
          cityOffers={[]}
        />)
    .toJSON();

  expect(connect).toHaveBeenCalledTimes(1);
  expect(connect).toHaveBeenCalledWith(expect.any(Function), expect.any(Object));

  const mapStateToProps = connect.mock.calls[0][0];
  const mappedProps = mapStateToProps({offers: [], cities: []});
  expect(mappedProps).toHaveProperty(`offer`);
  expect(mappedProps).toHaveProperty(`activeCity`);
  expect(mappedProps).toHaveProperty(`cityOffers`);
  expect(mappedProps).toHaveProperty(`isAuthorized`);

  const mapDispatchToProps = connect.mock.calls[0][1];
  expect(mapDispatchToProps).toHaveProperty(`addToFavorites`);
  expect(mapDispatchToProps).toHaveProperty(`fetchDataForHotel`);

  expect(connectAdvanced).toHaveBeenCalledWith(RentObjectDetails);

  expect(PageHeader).toHaveBeenCalled();
  expect(Rating).toHaveBeenCalled();
  expect(ReviewList).toHaveBeenCalled();
  expect(ReviewForm).toHaveBeenCalled();
  expect(OffersMap).toHaveBeenCalled();
  expect(CardList).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
