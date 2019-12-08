import React from 'react';
import {connect} from 'react-redux';
import RentObjectCard from '../rentObjectCard/rent-object-card.jsx';
import Sorting from '../sorting/sorting.jsx';
import {sortingSelector} from '../../selectors/sorting-selector';
import propTypes from './prop-types';

const RentObjectCardList = ({cityName, offers}) => {

  return <section className="cities__places places">
    <h2 className="visually-hidden">Places</h2>
    <b className="places__found">{offers.length} places to stay in {cityName}</b>
    <Sorting />
    <div className="cities__places-list places__list tabs__content">
      {
        offers.map((o) =><RentObjectCard
          key={o.id}
          id={o.id}
          name={o.name}
          type={o.type}
          image={o.image}
          price={o.price}
          rating={o.rating}
          isPremium={o.isPremium}
          isBookmarked={o.isBookmarked}
          onTitleClick={() => null}/>)
      }
    </div>
  </section>;
};

RentObjectCardList.propTypes = propTypes;

const mapStateToProps = (state) => ({
  offers: sortingSelector(state)
});

export default connect(mapStateToProps, null)(RentObjectCardList);
