import React from 'react';
import { getAllBooks } from '../../services/fetchBooks.js';
import Book from '../book/book.js';
import './bookcollection.css';

class BookCollection extends React.Component {
    constructor(props) {
        super(props);
        this.state = { books: [] };
    }

    componentDidMount() {
        getAllBooks().then(allBooks => {
            console.log(allBooks);
            this.setState({books: allBooks});
        });
    }

    render() {
        const books = this.state.books;
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