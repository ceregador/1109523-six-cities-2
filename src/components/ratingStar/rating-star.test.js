import React from 'react';
import RatingStar from '../ratingStar/rating-star.jsx';
import Renderer from 'react-test-renderer';

it(`renders correctly`, () => {
  const tree = Renderer
    .create(
        <RatingStar
          title={``}
          rate={1}
          isToggled={false}
          onClick={() => null}
        />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
