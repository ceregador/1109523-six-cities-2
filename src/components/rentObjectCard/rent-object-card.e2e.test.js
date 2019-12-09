import React from 'react';
import {shallow} from 'enzyme';
import RentObjectCard from './rent-object-card.jsx';

it(`Title's onClick handler is called after click`, () => {
  const clickMock = jest.fn();
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
        onTitleClick={clickMock}
        onActiveOfferChanged={() => null}
      />);

  const title = rentObject.find(`.place-card__name`);
  title.simulate(`click`);
  expect(clickMock).toHaveBeenCalledTimes(1);
});

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
        onTitleClick={() => null}
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
        onTitleClick={() => null}
        onActiveOfferChanged={mouseEnterMock}
      />);

  const card = rentObject.find(`.cities__place-card.place-card`);
  const fakeEvent = {currentTarget: {id: 1}};
  card.simulate(`mouseLeave`, fakeEvent);
  expect(mouseEnterMock).toHaveBeenCalledWith(null);
});
