import React from 'react';
import Card from './Card';

const CardList = ({ cities, input, onChange, onButtonClick }) => {
  const cards = Object.keys(cities).map((x, i) => {
    const city = cities[x];
    const props = {
      location: city.location,
      currentTemperature: city.currentTemperature,
      currentIcon: city.currentIcon,
      todayLow: city.todayLow,
      todayHigh: city.todayHigh,
      day1Low: city.day1Low,
      day1High: city.day1High,
      day1Icon: city.day1Icon,
      day2Low: city.day2Low,
      day2High: city.day2High,
      day2Icon: city.day2Icon,
      day3Low: city.day3Low,
      day3High: city.day3High,
      day3Icon: city.day3Icon,
      day4Low: city.day4Low,
      day4High: city.day4High,
      day4Icon: city.day4Icon,
      day5Low: city.day5Low,
      day5High: city.day5High,
      day5Icon: city.day5Icon,
    };

    return <Card key={i} {...props} />;
  });
  return (
    <div className="cardList">
      <div className="card addCityCard">
        <div className="addCityCard-content">
          <div className="headingContainer">
            <h3>Add another city</h3>
          </div>
          <div className="inputContainer">
            <input
              type="text"
              placeholder="Cleveland"
              onChange={e => onChange(e.target.value)}
            />
            <button onClick={() => onButtonClick(input)}>Add</button>
          </div>
        </div>
      </div>
      {cards}
    </div>
  );
};

export default CardList;
