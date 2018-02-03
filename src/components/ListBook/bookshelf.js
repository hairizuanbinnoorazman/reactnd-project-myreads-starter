import React from 'react'
import PropTypes from 'prop-types'
import Book from './book'

class Bookshelf extends React.Component {
  static PropTypes = {
    bookList: PropTypes.array.isRequired,
    bookShelfName: PropTypes.string.isRequired
  }

  render() {
    const { bookShelfName, bookList } = this.props

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ bookShelfName }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {bookList.map((book) => 
              <li key={book.title}>
                <Book bookImageUrl={book.backgroundImage} bookAuthor={book.author} bookTitle={book.title} />
              </li>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf
