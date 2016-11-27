import axios from 'axios';

const API_KEY = '23718ddd9dca4913920bd55bc2052b5f';
const ROOT_URL = `https://newsapi.org/v1/articles?apiKey=${API_KEY}`;//&source=techcrunch&'

export const FETCH_NEWS = 'FETCH_NEWS';

export function fetchNews(channel) {
  const channelSrc = channel.source;
  const url = `${ROOT_URL}&source=${channelSrc}`;
  const request = axios.get(url);
  return {
    type: FETCH_NEWS,
    payload: request
  };
}
