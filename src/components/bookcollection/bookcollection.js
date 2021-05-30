import React from 'react';
import { fetchAllBooks, deleteBook } from '../../services/bookService.js';
import Book from '../book/book.js';
import AddBookDialog from '../dialogs/addBookDialog.js';
import './bookcollection.css';

class BookCollection extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            books: [],
            bookToEdit: {
                _id: '',
                title: '',
                author: '',
                released: 2020,
                image: 'http://',
              },
            dialogOpen: false
        };

        this.getAllBooks = this.getAllBooks.bind(this);
    }

    handleEdit(bookToEdit) {
        this.child.setState({book: bookToEdit});
        this.child.setState({open: true});
        this.child.setState({editMode: true});
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
        fetchAllBooks().then(fetchResult => {
            this.setState({books: fetchResult.books});
        }).catch(e => {
            console.error(e);
        });
    }

    componentDidMount() {
        this.getAllBooks();
    }

    render() {
        const bookComps = [];
        this.state.books.forEach((book) => {
            bookComps.push(
                <Book key={book._id} id={book._id} title={book.title} author={book.author} released={book.released} image={book.image}
                    handleDeleteClick={(book) => this.handleDelete(book)}
                    handleEditClick={(book) => this.handleEdit(book)}
                />
            );
        });

        return (
            <div>
                <div className="book-collection">
                    <div className='books-container'>
                        {bookComps}
                    </div>
                </div>
                <div className="actions-container">
                    <AddBookDialog refreshBookCollection={this.getAllBooks} 
                        ref={ref => {this.child = ref}}
                        book={this.state.bookToEdit} 
                        open={this.state.dialogOpen}/>
                </div>
            </div>
        );
    }
}

export default BookCollection;