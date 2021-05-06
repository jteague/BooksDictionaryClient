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
                title: "",
                author: "",
                released: 2020,
                image: "http://",
              },
            dialogOpen: false
        };

        this.getAllBooks = this.getAllBooks.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleEdit(bookToEdit) {
        //alert('you are editing a book:' + book.title);
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
        fetchAllBooks().then(allBooks => {
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