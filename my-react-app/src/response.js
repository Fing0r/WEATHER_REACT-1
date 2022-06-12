
export const GET_URL = {
  MAIN: (value) => {
    const serverUrl = 'http://api.openweathermap.org/data/2.5/weather';
    const apiKey = '876cf39fa6cd1bdda202ce044015d0e5';
    const cityName = value

    return `${serverUrl}?q=${cityName}&appid=${apiKey}&units=metric`;
  },
  FORECAST: (value) => {
    const serverUrl = 'http://api.openweathermap.org/data/2.5/forecast';
    const cityName = value;
    const timestampsNum = 4;
    const apiKey = '876cf39fa6cd1bdda202ce044015d0e5';

    return `${serverUrl}?q=${cityName}&cnt=${timestampsNum}&appid=${apiKey}&units=metric`;
  }
}