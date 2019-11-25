import React from 'react';
import Renderer from 'react-test-renderer';
import RentObjectCardList from '../rentObjectCardList/rent-object-card-list.jsx';
import RentObjectCard from '../rentObjectCard/rent-object-card.jsx';

jest.mock(`../rentObjectCard/rent-object-card.jsx`);

it(`renders correctly`, () => {
  const tree = Renderer
    .create(<RentObjectCardList offers = {[{city: ``, offers: []}]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(RentObjectCard).toHaveBeenCalled();
});
