import React from 'react';
import {connect} from 'react-redux';
import ActionCreator from '../../actions/action-creator';
import SORTING_TYPE from '../../actions/sorting-type';
import PropTypes from './prop-types';

const Sorting = ({onChangeSortingType}) => {

  return <form className="places__sorting" action="#" method="get">
    <span className="places__sorting-caption">Sort by </span>
    <select className="places__sorting-type" id="places-sorting" onChange={onChangeSortingType}>
      <option className="places__option" value={SORTING_TYPE.POPULAR}>Popular</option>
      <option className="places__option" value={SORTING_TYPE.PRICE_LOW_TO_HIGH}>Price: low to high</option>
      <option className="places__option" value={SORTING_TYPE.PRICE_HIGH_TO_LOW}>Price: high to low</option>
      <option className="places__option" value={SORTING_TYPE.TOP_RATED_FIRST}>Top rated first</option>
    </select>
  </form>;
};

Sorting.propTypes = PropTypes;

const mapDispatchToProps = {
  onChangeSortingType: (event) => ActionCreator.setSortingType(event.target.value)
};

export default connect(null, mapDispatchToProps)(Sorting);
