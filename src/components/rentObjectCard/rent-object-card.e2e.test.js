import React from 'react';
import {shallow} from 'enzyme';
import RentObjectCard from './rent-object-card.jsx';

it(`Card's onActiveOfferChanged handler is called with id after mouse enter`, () => {
  const mouseEnterMock = jest.fn();
  const rentObject = shallow(
      <RentObjectCard
        id={1}
        name={``}
        isPremium={false}
        image={``}
        type={``}
        price={0}
        rating={5}
        isBookmarked={false}
        containerClassName={`cities__places-list places__list tabs__content`}
        itemClassName={`cities__place-card place-card`}
        imageWrapperClassName={`cities__image-wrapper place-card__image-wrapper`}
        onActiveOfferChanged={mouseEnterMock}
      />);

  const card = rentObject.find(`.cities__place-card.place-card`);
  const fakeEvent = {currentTarget: {id: 1}};
  card.simulate(`mouseEnter`, fakeEvent);
  expect(mouseEnterMock).toHaveBeenCalledWith(1);
});

it(`Card's onActiveOfferChanged handler is called with NULL after mouse leave`, () => {
  const mouseEnterMock = jest.fn();
  const rentObject = shallow(
      <RentObjectCard
        id={1}
        name={``}
        isPremium={false}
        image={``}
        type={``}
        price={0}
        rating={5}
        isBookmarked={false}
        containerClassName={`cities__places-list places__list tabs__content`}
        itemClassName={`cities__place-card place-card`}
        imageWrapperClassName={`cities__image-wrapper place-card__image-wrapper`}
        onActiveOfferChanged={mouseEnterMock}
      />);

  const card = rentObject.find(`.cities__place-card.place-card`);
  const fakeEvent = {currentTarget: {id: 1}};
  card.simulate(`mouseLeave`, fakeEvent);
  expect(mouseEnterMock).toHaveBeenCalledWith(null);
});

it(`addToFavorites is called with correct parameters`, () => {
  const addToFavoritesMock = jest.fn();
  const rentObject = shallow(
      <RentObjectCard
        id={1}
        name={``}
        isPremium={false}
        image={``}
        type={``}
        price={0}
        rating={5}
        isBookmarked={false}
        containerClassName={`cities__places-list places__list tabs__content`}
        itemClassName={`cities__place-card place-card`}
        imageWrapperClassName={`cities__image-wrapper place-card__image-wrapper`}
        onActiveOfferChanged={() => null}
        addToFavorites={addToFavoritesMock}
      />);

  const addToFavoritesButton = rentObject.find(`.place-card__bookmark-button.button`);
  addToFavoritesButton.simulate(`click`, {preventDefault: () => null});
  expect(addToFavoritesMock).toHaveBeenCalledWith(1, true);
});
