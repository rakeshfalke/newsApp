import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../actions/index';
import { bindActionCreators } from 'redux';
import { Image } from 'semantic-ui-react';

class ChannelList extends Component {
  renderList() {
    return this.props.newsChannel.map((channel) => {
      return (
        <Image src={channel.logo} onClick={() => this.props.fetchNews(channel)} />
      );
    });
  }

  render() {
    return (
      <Image.Group size='tiny'>
        {this.renderList()}
      </Image.Group>
    )
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of ChannelList
  return {
    newsChannel: state.newsChannel
  };
}

// Anything returned from this function will end up as props
// on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever fetchNews is called, the result shoudl be passed
  // to all of our reducers
  return bindActionCreators({ fetchNews: fetchNews }, dispatch);
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, fetchNews. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);
