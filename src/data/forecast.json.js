const longitude = -115.2721191268511;
const latitude = 36.04939704209706;

async function json(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Fetch failed: ${response.status}`);
  return await response.json();
}

const station = await json(
  `https://api.weather.gov/points/${latitude},${longitude}`
);

const forecast = await json(station.properties.forecastHourly);

process.stdout.write(JSON.stringify(forecast));
