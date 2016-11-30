import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Item, Message, Icon, Rating } from 'semantic-ui-react';

class ChannelDetail extends Component {

  renderNewsList() {
    return this.props.news.articles.map((news) => {
      return (
        <Item>
          <Item.Image size='medium' src={news.urlToImage} />
          <Item.Content>
        <Item.Header as='a' href={news.url} target='_blank'>{news.title}</Item.Header>
        <Item.Meta>{news.publishedAt}</Item.Meta>
        <Item.Description>
          {news.description}
        </Item.Description>
        <Item.Extra>
          <p><Rating icon='heart' defaultRating={2} maxRating={5} /></p>
          <p>
            <Icon bordered color='teal' name='facebook square' />
            <Icon bordered color='teal' name='linkedin square' />
            <Icon bordered color='teal' name='google plus square' />
            <Icon bordered color='teal' name='drupal square' />
          </p>
        </Item.Extra>
      </Item.Content>
      </Item>
      );
    });
  }

  render() {
    if (!this.props.news) {
      return (<Message icon>
    <Icon name='circle notched' loading />
    <Message.Content>
      <Message.Header>Please click on any one news channel</Message.Header>
      We will fetch that content for you.
    </Message.Content>
  </Message>);
    }

    return (
      <Item.Group>
        {this.renderNewsList()}
      </Item.Group>
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
