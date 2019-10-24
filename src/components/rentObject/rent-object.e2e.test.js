import React from 'react';
import {shallow} from 'enzyme';
import RentObject from './rent-object.jsx';

it(`Title's onClick handler is called after click`, () => {
  const clickMock = jest.fn();
  const rentObject = shallow(
      <RentObject
        rentObjectName={``}
        onTitleClick={clickMock}
      />);

  const title = rentObject.find(`.place-card__name`);
  title.simulate(`click`);
  expect(clickMock).toHaveBeenCalledTimes(1);
});
