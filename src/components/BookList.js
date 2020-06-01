import React, { Component } from 'react';
import './BookList.css'

import 'whatwg-fetch'

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      books: [] 
    };
  }

  componentDidMount() {
    fetch('https://library-nnhung.herokuapp.com/api/books').then(res => res.json()).then(books => {
      this.setState({ books });
    });
  }
  
  render() {
    const { books } = this.state;
    return(
      <>
        {
          books.map((book) => 
          <div className='Book-item'>
            <img src= {book.image} width={300} height={350} alt=''/>
            <h1> {book.title} </h1>
            <p> {book.desc} </p>
          </div>
          )
        }
      </>
    )
  }
};

export default BookList;

