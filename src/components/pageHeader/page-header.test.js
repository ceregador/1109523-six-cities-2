import React from 'react';
import {connect, connectAdvanced} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import PageHeader from './page-header.jsx';
import Renderer from 'react-test-renderer';

jest.mock(`react-redux`);

it(`renders and connects correctly for not authorzied`, () => {
  const tree = Renderer
    .create(
        <MemoryRouter>
          <PageHeader
            isAuthorized={false}
            userEmail={null}
          />
        </MemoryRouter>)
    .toJSON();

  expect(connect).toHaveBeenCalledTimes(1);
  expect(connect).toHaveBeenCalledWith(expect.any(Function), null);

  const mapStateToProps = connect.mock.calls[0][0];
  const mappedProps = mapStateToProps({isAuthorized: false, userEmail: null});
  expect(mappedProps).toHaveProperty(`isAuthorized`);
  expect(mappedProps).toHaveProperty(`userEmail`);

  expect(connectAdvanced).toHaveBeenCalledWith(PageHeader);

  expect(tree).toMatchSnapshot();
});

it(`renders and connects correctly for authorzied`, () => {
  const tree = Renderer
    .create(
        <MemoryRouter>
          <PageHeader
            isAuthorized={true}
            userEmail={`Email`}
          />
        </MemoryRouter>)
    .toJSON();

  expect(connect).toHaveBeenCalledTimes(1);
  expect(connect).toHaveBeenCalledWith(expect.any(Function), null);

  const mapStateToProps = connect.mock.calls[0][0];
  const mappedProps = mapStateToProps({isAuthorized: false, userEmail: null});
  expect(mappedProps).toHaveProperty(`isAuthorized`);
  expect(mappedProps).toHaveProperty(`userEmail`);

  expect(connectAdvanced).toHaveBeenCalledWith(PageHeader);

  expect(tree).toMatchSnapshot();
});
