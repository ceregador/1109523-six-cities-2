import React from 'react';
import {connect, connectAdvanced} from 'react-redux';
import RentObjectDetails from './rent-object-details.jsx';
import Rating from '../rating/rating.jsx';
import PageHeader from '../pageHeader/page-header.jsx';
import Renderer from 'react-test-renderer';

jest.mock(`../rating/rating.jsx`);
jest.mock(`../pageHeader/page-header.jsx`);
jest.mock(`react-redux`);

it(`renders and connects correctly`, () => {
  const tree = Renderer
    .create(
        <RentObjectDetails
          offer={{
            id: 1,
            name: ``,
            images: [],
            equipment: [],
            rating: 1.0,
            price: 10,
            type: ``,
            bedroomsCount: 2,
            maxGuestsCount: 1,
            description: ``,
            isPremium: false,
            isBookmarked: false,
            host: {
              avatarUrl: ``,
              name: ``,
              isPro: false
            }
          }}
          addToFavorites={() => null}
          fetchDataForHotel={() => null}
          match={{params: {offerId: `1`}}}
        />)
    .toJSON();

  expect(connect).toHaveBeenCalledTimes(1);
  expect(connect).toHaveBeenCalledWith(expect.any(Function), expect.any(Object));

  const mapStateToProps = connect.mock.calls[0][0];
  const mappedProps = mapStateToProps({offers: []});
  expect(mappedProps).toHaveProperty(`offer`);

  const mapDispatchToProps = connect.mock.calls[0][1];
  expect(mapDispatchToProps).toHaveProperty(`addToFavorites`);
  expect(mapDispatchToProps).toHaveProperty(`fetchDataForHotel`);

  expect(connectAdvanced).toHaveBeenCalledWith(RentObjectDetails);

  expect(Rating).toHaveBeenCalled();
  expect(PageHeader).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});

it(`renders the placeholder and connects correctly if the offer is undefined`, () => {
  const tree = Renderer
    .create(
        <RentObjectDetails
          offer={null}
          addToFavorites={() => null}
          fetchDataForHotel={() => null}
          match={{params: {offerId: `1`}}}
        />)
    .toJSON();

  expect(connect).toHaveBeenCalledTimes(1);
  expect(connect).toHaveBeenCalledWith(expect.any(Function), expect.any(Object));

  const mapStateToProps = connect.mock.calls[0][0];
  const mappedProps = mapStateToProps({offers: []});
  expect(mappedProps).toHaveProperty(`offer`);

  const mapDispatchToProps = connect.mock.calls[0][1];
  expect(mapDispatchToProps).toHaveProperty(`addToFavorites`);
  expect(mapDispatchToProps).toHaveProperty(`fetchDataForHotel`);

  expect(connectAdvanced).toHaveBeenCalledWith(RentObjectDetails);

  expect(tree).toMatchSnapshot();
});
