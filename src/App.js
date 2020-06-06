import React, { Component } from 'react';

import './App.css';
import BookList from './components/BookList';
import 'antd/dist/antd.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookList/>
      </div>
    );
  }
}

export default App;
