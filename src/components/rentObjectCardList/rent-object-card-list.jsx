import React from 'react';
import {connect} from 'react-redux';
import Sorting from '../sorting/sorting.jsx';
import CardList from '../cardList/card-list.jsx';
import Selector from '../../selectors/selector';
import PropTypes from './prop-types';
import withActiveItem from '../../hocs/withActiveItem/with-active-item.jsx';

const RentObjectCardList = ({offers, cityName, onActiveItemChange}) => {

  return <section className="cities__places places">
    <h2 className="visually-hidden">Places</h2>
    <b className="places__found">{offers.length} places to stay in {cityName}</b>
    <Sorting />
    <CardList
      offers={offers}
      containerClassName={`cities__places-list places__list tabs__content`}
      itemClassName={`cities__place-card place-card`}
      infoClassName={`place-card__info`}
      imageWrapperClassName={`cities__image-wrapper place-card__image-wrapper`}
      onActiveItemChange={onActiveItemChange}/>
  </section>;
};

RentObjectCardList.propTypes = PropTypes;

const mapStateToProps = (state) => ({
  offers: Selector.cityOffersSortingSelector(state)
});

export default connect(mapStateToProps, null)(withActiveItem(RentObjectCardList));
