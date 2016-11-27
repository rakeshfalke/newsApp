import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../actions/index';
import { bindActionCreators } from 'redux';

class ChannelList extends Component {
  renderList() {
    return this.props.newsChannel.map((channel) => {
      return (
        <li
          key={channel.name}
          onClick={() => this.props.fetchNews(channel)}
          className="list-group-item">
          {channel.name}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
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
