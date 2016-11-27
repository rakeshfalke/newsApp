import { combineReducers } from 'redux';
import newsReducer from './reducer_news';
import channelReducer from './reducer_channel';

const rootReducer = combineReducers({
  news: newsReducer,
  newsChannel: channelReducer
});

export default rootReducer;
