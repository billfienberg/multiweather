import React from 'react';
import CitiesForm from './CitiesForm';

class CitiesPage extends React.Component {
  submit = values => {
    // print the form values to the console
    fetch('/api/weather', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(json => {
        console.log('json: ', json);
        return json;
      });
  };
  render() {
    return <CitiesForm onSubmit={this.submit} />;
  }
}

export default CitiesPage;
