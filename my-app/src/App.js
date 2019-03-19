import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Posts from './Posts';

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:4000/api/posts')
      .then(res => this.setState({ posts: res.data }))
      .catch(err => console.log(err))
  }

   render() {
    return (
      <div className="App">
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
