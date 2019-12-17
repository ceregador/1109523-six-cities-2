import React, {useState, useCallback} from 'react';


const withFormFields = (Component) => {
  return function WithFormFields(props) {
    const [fields, updateField] = useState({});

    const onFormFieldChange = useCallback((fieldName, fieldValue) => {
      fields[fieldName] = fieldValue;
      updateField(Object.assign({}, fields));
    }, []);

    return <Component
      formFields={fields}
      onFormFieldChange={onFormFieldChange}
      {...props}
    />;
  };
};

export default withFormFields;
