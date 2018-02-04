import React from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from '../../BooksAPI'

class Book extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      book: {
        imageLinks: '',
        title: '',
        shelf: '',
        authors: []
      } 
    }

    this.handleChange = this.handleChange.bind(this);
  }


  static propTypes = {
    id: PropTypes.string.isRequired,
    onUpdate: PropTypes.func.isRequired,
  }

  componentDidMount() {
    BooksAPI.get(this.props.id).then((book) => {
      this.setState({book: book})
    })
  }

  handleChange(event) {
    this.setState({shelf: event.target.value})
    var book = this.state.book
    book.shelf = event.target.value
    this.props.onUpdate(book, event.target.value)
  }

  render() {
    const { imageLinks, title } = this.state.book
    var authors
    if (this.state.book.authors === undefined) {
      authors = []
    } else {
      authors = this.state.book.authors
    }
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("'+imageLinks.thumbnail+'")' }}></div>
          <div className="book-shelf-changer">
            <select value={this.state.book.shelf} onChange={this.handleChange}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        {authors.map((author) => {
          return(<div key={author} className="book-authors">{author}</div>)
        })}
      </div>
    )
  }
}

export default Book
