import React from 'react';
import {shallow} from 'enzyme';
import City from './city.jsx';

it(`onClick handler gets city's name at clicking`, () => {
  const clickMock = jest.fn();
  const city = shallow(
      <City
        city={{name: `City1`}}
        isActive={false}
        onClick={clickMock}
      />);

  const listItem = city.find(`.locations__item`);
  listItem.simulate(`click`);
  expect(clickMock).toHaveBeenCalledWith(`City1`);
});
