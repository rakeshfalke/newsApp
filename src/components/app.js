import React, { Component } from 'react';
import ChannelList from '../containers/channel-list';
import ChannelDetail from '../containers/channel-details';
import { Segment } from 'semantic-ui-react'
export default class App extends Component {
  render() {
    return (
<Segment.Group>
  <Segment.Group>
    <Segment><ChannelList /></Segment>
  </Segment.Group>
  <Segment.Group>
    <Segment><ChannelDetail /></Segment>
  </Segment.Group>
<Segment>Bottom</Segment>
</Segment.Group>
    );
  }
}
