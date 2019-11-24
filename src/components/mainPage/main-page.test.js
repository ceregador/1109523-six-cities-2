import React from 'react';
import MainPage from './main-page.jsx';
import Renderer from 'react-test-renderer';
import RentObjectCardList from '../rentObjectCardList/rent-object-card-list.jsx';

jest.mock(`../rentObjectCardList/rent-object-card-list.jsx`);

it(`renders correctly`, () => {
  const tree = Renderer
    .create(<MainPage offers = {[{city: ``, offers: []}]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
  expect(RentObjectCardList).toHaveBeenCalled();
});
