import React, { Component } from 'react';
import ChannelList from '../containers/channel-list';
import ChannelDetail from '../containers/channel-details';
export default class App extends Component {
  render() {
    return (
      <div>
      <ChannelList />
      <ChannelDetail />
      </div>
    );
  }
}
