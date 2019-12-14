import React from 'react';
import RentObjectCard from './rent-object-card.jsx';
import Rating from '../rating/rating.jsx';
import Renderer from 'react-test-renderer';

jest.mock(`../rating/rating.jsx`);

it(`renders correctly`, () => {
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

  expect(Rating).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
