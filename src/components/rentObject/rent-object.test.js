import React from 'react';
import RentObject from './rent-object.jsx';
import Renderer from 'react-test-renderer';

it(`renders correctly`, () => {
  const tree = Renderer
    .create(<RentObject rentObjectName = {``}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
