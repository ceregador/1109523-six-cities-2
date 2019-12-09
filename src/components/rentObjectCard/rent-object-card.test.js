import React from 'react';
import RentObjectCard from './rent-object-card.jsx';
import Rating from '../rating/rating.jsx';
import Renderer from 'react-test-renderer';
import {connect, connectAdvanced} from 'react-redux';

jest.mock(`../rating/rating.jsx`);
jest.mock(`react-redux`);

it(`renders and connects correctly`, () => {
  const tree = Renderer
    .create(
        <RentObjectCard
          id={1}
          name={``}
          isPremium={false}
          image={``}
          type={``}
          price={0}
          rating={4.5}
          isBookmarked={false}
          onTitleClick={() =>null}
          onActiveOfferChanged={() => null}
        />)
    .toJSON();

  expect(connect).toHaveBeenCalledTimes(1);
  expect(connect).toHaveBeenCalledWith(null, expect.any(Object));

  const mapDispatchToProps = connect.mock.calls[0][1];
  expect(mapDispatchToProps).toHaveProperty(`onActiveOfferChanged`);

  expect(connectAdvanced).toHaveBeenCalledWith(RentObjectCard);

  expect(Rating).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
