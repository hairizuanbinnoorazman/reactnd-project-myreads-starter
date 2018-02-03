import React from 'react'
import BookShelf from './bookshelf'
import { Link } from 'react-router-dom'

class ListBooks extends React.Component {
  
  render() {
    const { currentlyReadingBooks, wantToRead, read } = this.props.booklists
    
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf bookShelfName="Currently Reading" bookList={currentlyReadingBooks} />
            <BookShelf bookShelfName="Want to Read" bookList={wantToRead} />
            <BookShelf bookShelfName="Read" bookList={read} />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>  
    )
  }
}

export default ListBooks