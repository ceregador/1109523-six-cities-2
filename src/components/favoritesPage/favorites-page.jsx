import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import PageHeader from '../pageHeader/page-header.jsx';
import FavoritesEmptyPage from '../favoritesEmptyPage/favorites-empty-page.jsx';
import FavoritesList from '../favoritesList/favorites-list.jsx';
import Operation from '../../operation';
import {requiredFunc, requiredNumber, requiredBoolean, requiredString} from '../../prop-types';

const FavoritesPage = ({favoriteOffers, loadFavorites}) => {
  useEffect(() => {
    loadFavorites();
  }, []);

  const renderMain = () => {
    return favoriteOffers && favoriteOffers.length > 0
      ? <FavoritesList offers={favoriteOffers} />
      : <FavoritesEmptyPage />;
  };

  return <div className="page page--favorites-empty">
    <PageHeader />
    {renderMain()}
    <footer className="footer">
      <Link to="/" className="footer__logo-link">
        <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33"></img>
      </Link>
    </footer>
  </div>;
};

FavoritesPage.propTypes = {
  loadFavorites: requiredFunc,
  favoriteOffers: PropTypes.arrayOf(PropTypes.shape({
    id: requiredNumber,
    name: requiredString,
    isPremium: requiredBoolean,
    image: requiredString,
    type: requiredString,
    price: requiredNumber,
    isBookmarked: requiredBoolean
  }))
};

const mapStateToProps = (state) => ({
  favoriteOffers: state.currentFavorites,
});

const mapDispatchToProps = {
  loadFavorites: () => Operation.fetchFavorites()
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);
