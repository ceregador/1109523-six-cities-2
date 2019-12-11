import React, {useState} from 'react';

const withActiveItem = (Component, defaultValue) => {
  return function WithActiveItem() {
    const [, updateActiveItem] = useState(defaultValue);

    const onChangeActiveItem = (item) => {
      updateActiveItem(item);
    };

    return <Component onChangeActiveItem={onChangeActiveItem}/>;
  };
};

export default withActiveItem();
