import { cities } from './reducers';
import { FETCH_CITY_REQUEST, FETCH_CITY_SUCCESS } from './actions';

it('should return {} when calling cities with state = undefined and action = {}', () => {
  expect(cities(undefined, {})).toEqual({});
});

it(`should return {cleveland: {...json}} on FETCH_CITY_SUCCESS`, () => {
  const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000;
  const getDateMs = () => new Date().getTime();
  const getDaysInMs = number => getDateMs() + MILLISECONDS_PER_DAY * number;

  const day1Key = new Date(getDaysInMs(1)).toISOString().substring(0, 10);
  const day2Key = new Date(getDaysInMs(2)).toISOString().substring(0, 10);
  const day3Key = new Date(getDaysInMs(3)).toISOString().substring(0, 10);
  const day4Key = new Date(getDaysInMs(4)).toISOString().substring(0, 10);
  const day5Key = new Date(getDaysInMs(5)).toISOString().substring(0, 10);

  const action = {
    type: FETCH_CITY_SUCCESS,
    city: 'Cleveland',
    json: {
      current: {
        temp: 69.37,
        min: 62.6,
        max: 73.4,
        icon: '04n',
      },
      forecast: {
        [day1Key]: {
          min: 57.13,
          max: 68.77,
          icon: '03d',
        },
        [day2Key]: {
          min: 51.82,
          max: 69.91,
          icon: '02d',
        },
        [day3Key]: {
          min: 63.46,
          max: 69.67,
          icon: '10d',
        },
        [day4Key]: {
          min: 64.8,
          max: 69.73,
          icon: '10d',
        },
        [day5Key]: {
          min: 65.43,
          max: 69.93,
          icon: '10d',
        },
      },
    },
  };

  const output = {
    [action.city]: {
      location: 'Cleveland',
      currentTemperature: 69,
      currentIcon: '04n',
      todayLow: 63,
      todayHigh: 73,
      day1Low: 57,
      day1High: 69,
      day1Icon: '03d',
      day2Low: 52,
      day2High: 70,
      day2Icon: '02d',
      day3Low: 63,
      day3High: 70,
      day3Icon: '10d',
      day4Low: 65,
      day4High: 70,
      day4Icon: '10d',
      day5Low: 65,
      day5High: 70,
      day5Icon: '10d',
    },
  };
  expect(cities(undefined, action)).toEqual(output);
});
