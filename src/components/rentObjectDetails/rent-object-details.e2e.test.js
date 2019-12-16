import React from 'react';
import {mount} from 'enzyme';
import RentObjectDetails from './rent-object-details.jsx';

jest.mock(`../pageHeader/page-header.jsx`);

it(`RentObjectDetails component calls authorize at click of the button`, () => {
  const addToFavoritesMock = jest.fn();
  const fetchDataForHotelMock = jest.fn();

  const rentObjectDetails = mount(
      <RentObjectDetails
        offer={
          {
            id: 1,
            name: ``,
            rating: 1,
            type: ``,
            bedroomsCount: 1,
            maxGuestsCount: 1,
            price: 1,
            equipment: [],
            host: {
              name: ``,
              isPro: false,
              avatarUrl: ``
            },
            description: ``,
            isPremium: false,
            isBookmarked: false,
            images: []
          }
        }
        addToFavorites={addToFavoritesMock}
        fetchDataForHotel={fetchDataForHotelMock}
        match={{params: {offerId: `1`}}}
      />);

  const addToFavoritesButton = rentObjectDetails.find(`.property__bookmark-button.button`);
  addToFavoritesButton.simulate(`click`, {preventDefault: () => null});
  expect(addToFavoritesMock).toHaveBeenCalledWith(1, true);
  expect(fetchDataForHotelMock).not.toHaveBeenCalled();
});

it(`RentObjectDetails component calls fetchDataForHotel if the offer is not defined`, () => {
  const fetchDataForHotelMock = jest.fn();

  mount(<RentObjectDetails
    offer={null}
    addToFavorites={() => null}
    fetchDataForHotel={fetchDataForHotelMock}
    match={{params: {offerId: `2`}}}
  />);

  expect(fetchDataForHotelMock).toHaveBeenCalledWith(2);
});
