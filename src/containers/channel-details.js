import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChannelDetail extends Component {

  renderNewsList() {
    return this.props.news.articles.map((news) => {
      return (
        <li
          key={news.title}
          className="list-group-item">
          <a href={news.url} target="_blank"><h2>{news.title}</h2></a>
          <p><img src={news.urlToImage} height="250"/></p>
          <p>{news.description}</p>
        </li>
      );
    });
  }

  render() {
    if (!this.props.news) {
      return <div>Select a Channel to get started.</div>;
    }

    return (

      <ul className="list-group col-sm-8">
      <h1>{this.props.news.source}</h1>
        {this.renderNewsList()}
      </ul>
    );
  }
}


function mapStateToProps(state) {
  return {
    news: state.news,
    newsChannel: state.newsChannel
  };
}

export default connect(mapStateToProps)(ChannelDetail);
