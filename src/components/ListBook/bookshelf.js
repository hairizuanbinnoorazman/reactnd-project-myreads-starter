import React from 'react'
import PropTypes from 'prop-types'
import Book from './book'

class Bookshelf extends React.Component {
  static PropTypes = {
    bookList: PropTypes.array.isRequired,
    bookShelfName: PropTypes.string.isRequired,
    bookShelfKey: PropTypes.string.isRequired,
    onUpdate: PropTypes.func.isRequired,
  }

  render() {
    const { bookShelfName, bookList, bookShelfKey, onUpdate } = this.props
    const bookListFiltered = bookList.filter((b) => b.shelf === bookShelfKey)

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{ bookShelfName }</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {bookListFiltered.map((book) => 
              <li key={book.title}>
                <Book bookShelfKey={bookShelfKey} id={book.id} onUpdate={onUpdate} />
              </li>
            )}
          </ol>
        </div>
      </div>
    )
  }
}

export default Bookshelf
