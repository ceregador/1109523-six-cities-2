import React from 'react';
import {connect, connectAdvanced} from 'react-redux';
import Renderer from 'react-test-renderer';
import RentObjectCardList from '../rentObjectCardList/rent-object-card-list.jsx';
import RentObjectCard from '../rentObjectCard/rent-object-card.jsx';
import Sorting from '../sorting/sorting.jsx';

jest.mock(`../rentObjectCard/rent-object-card.jsx`);
jest.mock(`../sorting/sorting.jsx`);
jest.mock(`react-redux`);

it(`renders and connnects correctly`, () => {
  const tree = Renderer
    .create(
        <RentObjectCardList
          cityName={``}
          offers={[
            {
              id: 0,
              city: {name: ``},
              name: ``,
              isPremium: false,
              image: ``,
              type: ``,
              price: 1,
              isBookmarked: false,
              onTitleClick: () => null,
              onActiveOfferChanged: () => null
            }
          ]}
        />)
    .toJSON();

  expect(connect).toHaveBeenCalledTimes(1);
  expect(connect).toHaveBeenCalledWith(expect.any(Function), null);

  const mapStateToProps = connect.mock.calls[0][0];
  const mappedProps = mapStateToProps({offers: []});
  expect(mappedProps).toHaveProperty(`offers`);

  expect(connectAdvanced).toHaveBeenCalledWith(RentObjectCardList);

  expect(RentObjectCard).toHaveBeenCalled();
  expect(Sorting).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
