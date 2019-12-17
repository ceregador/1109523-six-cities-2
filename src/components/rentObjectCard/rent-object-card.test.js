import React from 'react';
import {connect, connectAdvanced} from 'react-redux';
import RentObjectCard from './rent-object-card.jsx';
import Rating from '../rating/rating.jsx';
import Renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';

jest.mock(`../rating/rating.jsx`);
jest.mock(`react-redux`);

it(`renders correctly`, () => {
  const tree = Renderer
    .create(
        <MemoryRouter>
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
          />
        </MemoryRouter>)
    .toJSON();

  expect(connect).toHaveBeenCalledTimes(1);
  expect(connect).toHaveBeenCalledWith(null, expect.any(Object));

  const mapDispatchToProps = connect.mock.calls[0][1];
  expect(mapDispatchToProps).toHaveProperty(`addToFavorites`);

  expect(connectAdvanced).toHaveBeenCalledWith(RentObjectCard);

  expect(Rating).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
