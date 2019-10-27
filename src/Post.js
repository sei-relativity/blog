import React, { Component } from 'react';
import Comment from './Comment';

class Post extends Component {
  render() {
    const allComments = [
      <Comment message={this.props.comments[0]} />,
      <Comment message={this.props.comments[1]} />,
      <Comment message={this.props.comments[2]} />
    ];

    return (
      <div>
        <h1>{this.props.title}</h1>
        <h3>by {this.props.author}</h3>
        <p>{this.props.body}</p>
        <h2>Comments:</h2>
        {allComments}
      </div>
    );
  }
}

export default Post;