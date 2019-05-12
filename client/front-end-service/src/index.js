import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Book extends React.Component {
  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.author}</div>
        <div>{this.props.bookinstances}</div>
        <div>{this.props.url}</div>
      </div>
    );
  }
}

class BookList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        {
          name: "Book A",
          author: "Author A",
          bookinstances: 10,
          url: "/catalog/books/10"
        },
        {
          name: "Book B",
          author: "Author B",
          bookinstances: 15,
          url: "/catalog/books/15"
        },
        {
          name: "Book C",
          author: "Author C",
          bookinstances: 30,
          url: "/catalog/books/50"
        }
      ]
    };
  }

  renderBook(book) {
    return (
      <div>
        <Book
          name={book.name}
          author={book.author}
          bookinstances={book.bookinstances}
          url={book.url}
        />
      </div>
    );
  }

  render() {
    return <div>{this.state.books.map(book => this.renderBook(book))}</div>;
  }
}

ReactDOM.render(<BookList />, document.getElementById("root"));
