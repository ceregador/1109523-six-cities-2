import React from 'react';
import RentObjectCard from '../rentObjectCard/rent-object-card.jsx';
import {offersPropTypes} from '../prop-types';


class RentObjectCardList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeOfferId: null
    };
  }

  onActiveOfferChanged() {
  }

  render() {
    const {city, offers} = this.props;

    return <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} places to stay in {city}</b>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex="0">
        Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <select className="places__sorting-type" id="places-sorting">
          <option className="places__option" value="popular" selected="">Popular</option>
          <option className="places__option" value="to-high">Price: low to high</option>
          <option className="places__option" value="to-low">Price: high to low</option>
          <option className="places__option" value="top-rated">Top rated first</option>
        </select>
      </form>
      <div className="cities__places-list places__list tabs__content">
        {
          offers.map((o) =><RentObjectCard
            key={o.key}
            name={o.name}
            type={o.type}
            image={o.image}
            price={o.price}
            rating={o.rating}
            isPremium={o.isPremium}
            isBookmarked={o.isBookmarked}
            onTitleClick={() => null}
            onActiveOfferChanged={this.onActiveOfferChanged}/>)
        }
      </div>
    </section>;
  }
}

RentObjectCardList.propTypes = offersPropTypes;

export default RentObjectCardList;
