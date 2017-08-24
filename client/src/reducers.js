import { combineReducers } from 'redux';
import { UPDATE_INPUT, FETCH_CITY_SUCCESS } from './actions';

const sampleData = {
  Cleveland: {
    location: 'Cleveland',
    currentTemperature: 69,
    currentIcon: 'ic_04n',
    todayLow: 63,
    todayHigh: 73,
    day1Low: 57,
    day1High: 69,
    day1Icon: 'ic_03d',
    day2Low: 52,
    day2High: 70,
    day2Icon: 'ic_01d',
    day3Low: 63,
    day3High: 70,
    day3Icon: 'ic_10d',
    day4Low: 65,
    day4High: 70,
    day4Icon: 'ic_09d',
    day5Low: 65,
    day5High: 70,
    day5Icon: 'ic_11d',
  },
};

// const initialState = {};
const useSampleData = false;
const initialState = useSampleData ? sampleData : {};

export const cities = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITY_SUCCESS:
      const current = action.json.current;

      const currentTemperature = Math.round(current.temp);
      const todayHigh = Math.round(current.max);
      const todayLow = Math.round(current.min);
      const currentIcon = current.icon;

      const forecast = action.json.forecast;

      const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
      const getDateMs = () => new Date().getTime();
      const getDaysInMs = number => getDateMs() + MILLISECONDS_PER_DAY * number;

      const day1Key = new Date(getDaysInMs(1)).toISOString().substring(0, 10);
      const day2Key = new Date(getDaysInMs(2)).toISOString().substring(0, 10);
      const day3Key = new Date(getDaysInMs(3)).toISOString().substring(0, 10);
      const day4Key = new Date(getDaysInMs(4)).toISOString().substring(0, 10);
      const day5Key = new Date(getDaysInMs(5)).toISOString().substring(0, 10);

      const day1Low = Math.round(forecast[day1Key].min);
      const day1High = Math.round(forecast[day1Key].max);
      const day1Icon = forecast[day1Key].icon;

      const day2Low = Math.round(forecast[day2Key].min);
      const day2High = Math.round(forecast[day2Key].max);
      const day2Icon = forecast[day2Key].icon;

      const day3Low = Math.round(forecast[day3Key].min);
      const day3High = Math.round(forecast[day3Key].max);
      const day3Icon = forecast[day3Key].icon;

      const day4Low = Math.round(forecast[day4Key].min);
      const day4High = Math.round(forecast[day4Key].max);
      const day4Icon = forecast[day4Key].icon;

      const day5Low = Math.round(forecast[day5Key].min);
      const day5High = Math.round(forecast[day5Key].max);
      const day5Icon = forecast[day5Key].icon;

      return Object.assign({}, state, {
        [action.city]: {
          location: action.city,
          currentTemperature,
          currentIcon,
          todayHigh,
          todayLow,
          day1Low,
          day1High,
          day1Icon,
          day2Low,
          day2High,
          day2Icon,
          day3Low,
          day3High,
          day3Icon,
          day4Low,
          day4High,
          day4Icon,
          day5Low,
          day5High,
          day5Icon,
        },
      });

    default:
      return state;
  }
};

export const input = (state = '', action) => {
  switch (action.type) {
    case UPDATE_INPUT:
      return action.text;
    default:
      return state;
  }
};

const rootReducer = combineReducers({ input, cities });

export default rootReducer;
