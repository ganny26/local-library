import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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

function Home() {
  return <div>Home</div>;
}

function About() {
  return <div>About Us</div>;
}

class BookCreator extends React.Component {
  render() {
    return <div>Form to create book appears here!!!</div>;
  }
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/books">Books List</Link>
            </li>
            <li>
              <Link to="/create_book">Create Book</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/books" component={BookList} />
        <Route path="/create_book" component={BookCreator} />
      </div>
    </Router>
  );
}

ReactDOM.render(<AppRouter />, document.getElementById("root"));
