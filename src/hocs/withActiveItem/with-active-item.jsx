import React from 'react';
import PropTypes from 'prop-types';


const withActiveItem = (Component) => {
  return function WithActiveItem(props) {
    const {onChangeActiveItem} = props;

    const onHocChangeActiveItem = (item) => {
      onChangeActiveItem(item);
    };

    WithActiveItem.propTypes = {
      onChangeActiveItem: PropTypes.func.isRequired
    };

    return <Component
      onItemClick={onHocChangeActiveItem}
      {...props}
    />;
  };
};

export default withActiveItem;
