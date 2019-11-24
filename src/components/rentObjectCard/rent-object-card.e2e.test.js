import React from 'react';
import {shallow} from 'enzyme';
import RentObjectCard from './rent-object-card.jsx';

it(`Title's onClick handler is called after click`, () => {
  const clickMock = jest.fn();
  const rentObject = shallow(
      <RentObjectCard
        name={``}
        isPremium={false}
        image={``}
        type={``}
        price={0}
        isBookmarked={false}
        onTitleClick={clickMock}
        onActiveOfferChanged={() => null}
      />);

  const title = rentObject.find(`.place-card__name`);
  title.simulate(`click`);
  expect(clickMock).toHaveBeenCalledTimes(1);
});
