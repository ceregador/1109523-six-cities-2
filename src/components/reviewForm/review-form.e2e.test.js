import React from 'react';
import {mount} from 'enzyme';
import ReviewForm from './review-form.jsx';

it(`passes text nds activeOfferId to addReview at submitting`, () => {
  const addReviewMock = jest.fn();

  const reviewForm = mount(
      <ReviewForm
        addReview={addReviewMock}
        activeOfferId={1}
      />);

  const textArea = reviewForm.find(`.reviews__textarea.form__textarea`);
  textArea.simulate(`change`, {target: {value: `aaaa`}});

  const submitButton = reviewForm.find(`.reviews__submit.form__submit.button`);
  submitButton.simulate(`click`);
  expect(addReviewMock).toHaveBeenCalledWith(undefined, `aaaa`, 1);
});
