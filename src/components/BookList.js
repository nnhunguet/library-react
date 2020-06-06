import React, { Component } from 'react';

import 'whatwg-fetch'
import { Row, Col } from 'antd';
import 'antd/dist/antd.css'
//Card 
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, ShoppingCartOutlined } from '@ant-design/icons';
// Button 
//Input
import { Input } from 'antd';
const { Meta } = Card;
const { Search } = Input;

class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      books: []
    };
    this.FilterBooks = this.FilterBooks.bind(this);
  }

  componentDidMount() {
    fetch('https://library-nnhung.herokuapp.com/api/books').then(res => res.json()).then(books => {
      this.setState({ books });
    });
  }

  FilterBooks(event) {
    this.setState({
      books: this.state.books.filter(function(book) {
        return book.title.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1;
      })
    });
  }
  
  render() {
    const { books } = this.state;
    return(
      <>
        <Search
          placeholder="Search Book"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
          loading={false}
          allowClear={true}
          onChange={this.FilterBooks}
        />
        <Row gutter={[16, 16]}>
          {
            books.map((book, index) => 
              <Col span={6} key={index}>
                <Card
                  style={{ width: 300 }}
                  cover={
                    <img
                      alt="example"
                      src={book.image}
                      height={400}
                    />
                  }
                  actions={[
                    <ShoppingCartOutlined key='sale'/>,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                  ]}
                  hoverable={true}
                  loading={false}
                >
                  <Meta
                    avatar={<Avatar src="https://avatars2.githubusercontent.com/u/48384470?s=280&v=4" />}
                    title={book.title}
                    description={book.desc}
                  />
                </Card>
              </Col>
            )
          }
        </Row>
      </>
    )
  }
};

export default BookList;

