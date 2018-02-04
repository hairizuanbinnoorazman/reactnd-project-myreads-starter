import React from 'react'
import BookShelf from './bookshelf'
import { Link } from 'react-router-dom'

class ListBooks extends React.Component {
  render() {
    const { books, onUpdate } = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf bookShelfName="Currently Reading" bookList={books} bookShelfKey="currentlyReading" onUpdate={onUpdate}/>
            <BookShelf bookShelfName="Want to Read" bookList={books} bookShelfKey="wantToRead" onUpdate={onUpdate}/>
            <BookShelf bookShelfName="Read" bookList={books} bookShelfKey="read" onUpdate={onUpdate}/>
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