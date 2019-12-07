import React from 'react';
import Renderer from 'react-test-renderer';
import City from '../city/city.jsx';

it(`Inactive city renders correctly`, () => {
  const tree = Renderer
    .create(
        <City
          city={{name: ``}}
          isActive={false}
          onClick={() => null}
        />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it(`Active city renders correctly`, () => {
  const tree = Renderer
    .create(
        <City
          city={{name: ``}}
          isActive={true}
          onClick={() => null}
        />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
