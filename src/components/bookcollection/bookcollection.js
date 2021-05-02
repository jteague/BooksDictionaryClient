import React from 'react';
import { getAllBooks, deleteBook } from '../../services/bookService.js';
import Book from '../book/book.js';
import './bookcollection.css';

class BookCollection extends React.Component {
    constructor(props) {
        super(props);
        this.state = { books: [] };
    }

    handleEdit(book) {
        alert('you are editing a book:' + book);
    }

    handleDelete(book) {
        deleteBook(book).then(res => {
            if (res.data.success === true) {
                this.getAllBooks();
            } else {
                alert('Failed to delete the book');
            }
        }).catch(err => {
            console.error(err);
            alert('Failed to delete the book: ' + err);
        });
    }

    getAllBooks() {
        getAllBooks().then(allBooks => {
            console.log(allBooks);
            this.setState({books: allBooks});
        });
    }

    componentDidMount() {
        this.getAllBooks();
    }

    render() {
        const books = this.state.books;
        const bookComps = [];

        books.forEach((book) => {
            bookComps.push(
                <Book key={book._id} title={book.title} author={book.author} released={book.released} image={book.image}
                    handleDeleteClick={(book) => this.handleDelete(book)}
                    handleEditClick={this.handleEdit}
                />
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