import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Book extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.name}</td>
        <td>{this.props.author}</td>
        <td>{this.props.bookinstances}</td>
        <td>{this.props.url}</td>
      </tr>
    );
  }
}

class BookList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        {
          id: 1,
          name: "Book A",
          author: "Author A",
          bookinstances: 10,
          url: "/catalog/books/10"
        },
        {
          id: 2,
          name: "Book B",
          author: "Author B",
          bookinstances: 15,
          url: "/catalog/books/15"
        },
        {
          id: 3,
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
      <Book
        key={book.id}
        name={book.name}
        author={book.author}
        bookinstances={book.bookinstances}
        url={book.url}
      />
    );
  }

  render() {
    return (
      <div>
        <div>Books List</div>

        <table border="1">
          <tbody>{this.state.books.map(book => this.renderBook(book))}</tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(<BookList />, document.getElementById("root"));
