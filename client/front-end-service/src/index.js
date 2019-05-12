import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Book extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.title}</td>
        <td>{this.props.author}</td>
        <td>{this.props.summary}</td>
        <td>{this.props.genre}</td>
        <td>{this.props.url}</td>
      </tr>
    );
  }
}

class BookList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: {
        books: []
      }
    };
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch("/catalog/books");
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  renderBook(book) {
    return (
      <Book
        key={book.id}
        title={book.title}
        author={book.author}
        summary={book.summary}
        genre={book.genre}
        url={book.url} // todo: fix this URL.
      />
    );
  }

  render() {
    return (
      <div>
        <div>Books List</div>

        <table border="1">
          <tbody>
            {this.state.response.books.map(book => this.renderBook(book))}
          </tbody>
        </table>
      </div>
    );
  }
}

ReactDOM.render(<BookList />, document.getElementById("root"));
