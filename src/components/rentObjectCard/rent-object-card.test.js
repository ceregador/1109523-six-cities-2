import React from 'react';
import RentObjectCard from './rent-object-card.jsx';
import Renderer from 'react-test-renderer';

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
          isBookmarked={false}
          onTitleClick={() =>null}
          onActiveOfferChanged={() => null}
        />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
