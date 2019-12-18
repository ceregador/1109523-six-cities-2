import React from 'react';
import CardList from './card-list.jsx';
import RentObjectCard from '../rentObjectCard/rent-object-card.jsx';
import Renderer from 'react-test-renderer';

jest.mock(`../rentObjectCard/rent-object-card.jsx`);

it(`renders correctly`, () => {
  const tree = Renderer
      .create(
          <CardList
            offers={[{
              id: 1,
              name: ``,
              isPremium: false,
              image: ``,
              type: ``,
              price: 0,
              rating: 4.5,
              isBookmarked: false
            }]}
            containerClassName={``}
            itemClassName={``}
            infoClassName={``}
            imageWrapperClassName={``}
            onActiveItemChange={() => null}
          />)
      .toJSON();

  expect(RentObjectCard).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
