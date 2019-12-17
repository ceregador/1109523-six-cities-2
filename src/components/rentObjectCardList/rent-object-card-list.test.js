import React from 'react';
import {connect, connectAdvanced} from 'react-redux';
import Renderer from 'react-test-renderer';
import RentObjectCardList from '../rentObjectCardList/rent-object-card-list.jsx';
import CardList from '../cardList/card-list.jsx';
import Sorting from '../sorting/sorting.jsx';

jest.mock(`../cardList/card-list.jsx`);
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

  expect(CardList).toHaveBeenCalled();
  expect(Sorting).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
