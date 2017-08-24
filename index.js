require('dotenv').config();
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

app.post('/api/city', (req, res) => {
  const city = req.body.city;

  const APP_ID = process.env.APP_ID;
  const openWeatherCurrentWeatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?units=imperial&APPID=${APP_ID}&q=`;

  const currentWeatherUrl = `${openWeatherCurrentWeatherApiUrl}${city},us`;

  const openWeatherForecastApiUrl = `https://api.openweathermap.org/data/2.5/forecast/daily?mode=json&units=imperial&cnt=7&APPID=${APP_ID}&q=`;

  const forecastUrl = `${openWeatherForecastApiUrl}${city},us`;

  const urls = [currentWeatherUrl, forecastUrl];

  Promise.all(
    urls.map(url =>
      fetch(url).then(response => {
        return response.json();
      })
    )
  ).then(responses => {
    const current = {
      temp: responses[0].main.temp,
      min: responses[0].main.temp_min,
      max: responses[0].main.temp_max,
      icon: `ic_${responses[0].weather[0].icon}`,
    };

    const forecast = {};
    responses[1].list.slice(1).forEach(x => {
      const date = new Date(x.dt * 1000).toISOString().substring(0, 10);
      forecast[date] = {};
      forecast[date].min = x.temp.min;
      forecast[date].max = x.temp.max;
      forecast[date].icon = `ic_${x.weather[0].icon}`;
    });

    const output = {
      current,
      forecast,
    };
    return res.json(output);
  });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`MultiWeather listening on ${port}`);
