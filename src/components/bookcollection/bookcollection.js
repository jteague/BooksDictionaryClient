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
        this.handleEdit = this.handleEdit.bind(this);
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
            console.log('getAllBooks: ' + fetchResult.books);
            this.setState({books: fetchResult.books});
        });
    }

    componentDidMount() {
        this.getAllBooks();
    }

    render() {
        const bookComps = [];
        this.state.books.forEach((book) => {
            console.log('Creating book component: ' + book.author)
            bookComps.push(
                <Book key={book._id} id={book._id} title={book.title} author={book.author} released={book.released} image={book.image}
                    handleDeleteClick={(book) => this.handleDelete(book)}
                    handleEditClick={this.handleEdit}
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