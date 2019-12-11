import React from 'react';
import CitiesList from './cities-list.jsx';
import City from '../city/city.jsx';
import Renderer from 'react-test-renderer';

jest.mock(`../city/city.jsx`);

it(`renders and connects correctly`, () => {
  const tree = Renderer
      .create(
          <CitiesList
            cities={[{name: ``, key: ``}]}
            activeCityName={``}
            onChangeCity={() => null}
            loadOffers={() => null}
          />)
      .toJSON();

  expect(City).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
