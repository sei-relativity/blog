import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import Post from './Post';

const person = {
  name: 'Usman Bashir',
  age: 0,
  favorites: [
    'Person of Interest',
    'Scrubs',
    'Numb3rs',
    'Angel',
    'Boston Legal',
    'Futurama',
    'Burn Notice',
    'The West Wing',
    'Stargate SG-1',
    'Battlestar Galactica',
  ]
};

// ReactDOM.render(
//   <Hello
//     name={person.name}
//     age={person.age}
//     tvShows={person.favorites} />,
//   document.getElementById('root')
// );

const post = {
  title: 'Hello World',
  author: 'Usman',
  body: 'Check out this body!',
  comments: [
    'First!',
    'This post sucks!!!',
    "You can't write at all. Get a life!"
  ]
};

ReactDOM.render(
  <Post
    title={post.title}
    author={post.author}
    body={post.body}
    comments={post.comments} />,
  document.getElementById('root')
);