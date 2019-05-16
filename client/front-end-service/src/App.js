import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
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
        books: [],
      },
    };
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({response: res}))
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
          <tbody>{this.state.response.books.map(book => this.renderBook(book))}</tbody>
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

class BookFormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formControls: {
        title: {
          value: "",
        },
        author: {
          value: "",
        },
        genre: {
          value: "",
        },
      },
    };
  }

  changeHandler = event => {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      // todo: Check how this syntax works
      formControls: {
        ...this.state.formControls,
        [name]: {
          ...this.state.formControls[name],
          value,
        },
      },
    });
  };

  createBookhandler = async event => {
    event.preventDefault();

    console.log("********* createBookhandler() called *********");

    const response = await fetch("/catalog/book/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: this.state.formControls.title,
        summary: this.state.formControls.summary,
        author: this.state.formControls.author,
        genre: this.state.formControls.genre,
      }),
    });

    const resBody = await response.text();

    if (resBody.status) {
      // Handle success
    } else {
      // Handle failure
    }
  };

  render() {
    return (
      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Title</label>
              </td>
              <td>
                <input type="text" name="title" value={this.state.title} onChange={this.changeHandler} />
              </td>
            </tr>

            <tr>
              <td>
                <label>Author</label>
              </td>
              <td>
                <input type="text" name="author" value={this.state.author} onChange={this.changeHandler} />
              </td>
            </tr>

            <tr>
              <td>
                <label>Genre</label>
              </td>
              <td>
                <input type="text" name="genre" value={this.state.genre} onChange={this.changeHandler} />
              </td>
            </tr>
            <tr>
              <td>
                <input type="submit" value="Create Book" onClick={this.createBookhandler} />
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    );
  }
}

class BookCreator extends React.Component {
  render() {
    return <BookFormComponent />;
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

export default AppRouter;
