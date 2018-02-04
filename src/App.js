import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBook from './components/SearchBook/searchbook'
import ListBooks from './components/ListBook/listbooks'
import { Route } from 'react-router-dom'


class BooksApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }


  update = (book, category) => {
    var updatedBooks = {...this.state}
    updatedBooks.books = updatedBooks.books.filter((b) => b.id !== book.id)
    updatedBooks.books = updatedBooks.books.concat(book)
    this.setState(state => ({
      books: updatedBooks.books
    }))
    BooksAPI.update(book, category)
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks 
            books={this.state.books}
            onUpdate={this.update}/>
        )} />
        <Route path="/search" render={() => (
          <SearchBook 
            onUpdate={this.update}/>
        )} />
      </div>
    )
  }
}

export default BooksApp
