import React from 'react';
import Book from '../book/book.js';
import './bookcollection.css';

class BookCollection extends React.Component {
    render() {
        const books = this.props.books;
        const bookComps = [];

        books.forEach((book) => {
            bookComps.push(
                <Book key={book._id} title={book.title} author={book.author} released={book.released} image={book.image}/>
            )
        });

        return (
            <div className="book-collection">
                {bookComps}
            </div>
        );
    }
}

export default BookCollection;