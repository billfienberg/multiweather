import React from 'react';
import { Field, reduxForm } from 'redux-form';

let CitiesForm = props => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="city1">City #1</label>
        <Field name="city1" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="city2">City #2</label>
        <Field name="city2" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="city3">City #3</label>
        <Field name="city3" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

CitiesForm = reduxForm({
  // a unique name for the form
  form: 'cities',
})(CitiesForm);

export default CitiesForm;
