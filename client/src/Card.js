import React from 'react';
import icons from './icons/icons';

const Card = ({ ...props }) => {
  const { location } = props;
  const { currentTemperature } = props;
  const { todayLow } = props;
  const { todayHigh } = props;
  const { currentIcon } = props;
  const { day1Low } = props;
  const { day1High } = props;
  const { day1Icon } = props;
  const { day2Low } = props;
  const { day2High } = props;
  const { day2Icon } = props;
  const { day3Low } = props;
  const { day3High } = props;
  const { day3Icon } = props;
  const { day4Low } = props;
  const { day4High } = props;
  const { day4Icon } = props;
  const { day5Low } = props;
  const { day5High } = props;
  const { day5Icon } = props;

  return (
    <div className="card">
      <div className="card-content">
        <div className="location">
          <div>
            {location}
          </div>
        </div>
        <div className="today-title">Current</div>
        <div className="today">
          <div className="today-low">
            <div>Low</div>
            <div>
              {todayLow}
            </div>
          </div>
          <div className="today-current">
            <div className="current-headingContainer">
              <h2>
                {currentTemperature}
              </h2>
            </div>
            <div className="iconContainer">
              <div className="currentWeather-iconWrapper">
                <img alt="weather icon" src={icons[currentIcon]} />
              </div>
            </div>
          </div>
          <div className="today-high">
            <div>High</div>
            {todayHigh}
          </div>
        </div>
        <div className="forecast">
          <div className="forecast-title">5-Day Forecast</div>
          <div className="forecast-highs">
            <div className="high-label">High</div>
            <div className="high-values">
              <div>
                {day1High}
              </div>
              <div>
                {day2High}
              </div>
              <div>
                {day3High}
              </div>
              <div>
                {day4High}
              </div>
              <div>
                {day5High}
              </div>
            </div>
          </div>
          <div className="forecast-lows">
            <div className="low-label">Low</div>
            <div className="low-values">
              <div>
                {day1Low}
              </div>
              <div>
                {day2Low}
              </div>
              <div>
                {day3Low}
              </div>
              <div>
                {day4Low}
              </div>
              <div>
                {day5Low}
              </div>
            </div>
          </div>
          <div className="forecast-icons">
            <div className="icon-label">Icon</div>
            <div className="icon-values">
              <div className="forecast-iconWrapper">
                <img alt="weather icon" src={icons[day1Icon]} />
              </div>
              <div className="forecast-iconWrapper">
                <img alt="weather icon" src={icons[day2Icon]} />
              </div>
              <div className="forecast-iconWrapper">
                <img alt="weather icon" src={icons[day3Icon]} />
              </div>
              <div className="forecast-iconWrapper">
                <img alt="weather icon" src={icons[day4Icon]} />
              </div>
              <div className="forecast-iconWrapper">
                <img alt="weather icon" src={icons[day5Icon]} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
