import React from 'react';
import {connect, connectAdvanced} from 'react-redux';
import Sorting from '../sorting/sorting.jsx';
import Renderer from 'react-test-renderer';

jest.mock(`react-redux`);

it(`renders and connects correctly`, () => {
  const tree = Renderer
    .create(<Sorting onChangeSortingType={() => null}/>)
    .toJSON();

  expect(connect).toHaveBeenCalledTimes(1);
  expect(connect).toHaveBeenCalledWith(null, expect.any(Object));

  const mapDispatchToProps = connect.mock.calls[0][1];
  expect(mapDispatchToProps).toHaveProperty(`onChangeSortingType`);

  expect(connectAdvanced).toHaveBeenCalledWith(Sorting);

  expect(tree).toMatchSnapshot();
});
