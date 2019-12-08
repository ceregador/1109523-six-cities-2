import React from 'react';
import {connect, connectAdvanced} from 'react-redux';
import CitiesList from './cities-list.jsx';
import City from '../city/city.jsx';
import Renderer from 'react-test-renderer';

jest.mock(`react-redux`);
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

  expect(connect).toHaveBeenCalledTimes(1);
  expect(connect).toHaveBeenCalledWith(null, expect.any(Object));

  const mapDispatchToProps = connect.mock.calls[0][1];
  expect(mapDispatchToProps).toHaveProperty(`loadOffers`);

  expect(connectAdvanced).toHaveBeenCalledWith(CitiesList);

  expect(City).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
