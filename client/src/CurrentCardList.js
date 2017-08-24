import { connect } from 'react-redux';
import CardList from './CardList';
import { updateInput, fetchCityRequest } from './actions';

export const mapStateToProps = state => {
  return { cities: state.cities, input: state.input };
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: text => {
      dispatch(updateInput(text));
    },
    onButtonClick: city => {
      dispatch(fetchCityRequest(city));
    },
  };
};

// Container Component
const CurrentCardList = connect(mapStateToProps, mapDispatchToProps)(CardList);

export default CurrentCardList;
