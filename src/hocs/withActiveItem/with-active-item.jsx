import React, {useState} from 'react';
import PropTypes from 'prop-types';


const withActiveItem = (Component) => {
  return function WithActiveItem(props) {
    const {onChangeActiveItem, getDefaultItem} = props;
    const [activeItem, updateActiveItem] = useState(getDefaultItem());

    const onHocChangeActiveItem = (item) => {
      onChangeActiveItem(item);
      updateActiveItem(item);
    };

    WithActiveItem.propTypes = {
      onChangeActiveItem: PropTypes.func.isRequired,
      getDefaultItem: PropTypes.func.isRequired
    };

    return <Component
      activeItem={activeItem}
      onItemChange={onHocChangeActiveItem}
      {...props}
    />;
  };
};

export default withActiveItem;
