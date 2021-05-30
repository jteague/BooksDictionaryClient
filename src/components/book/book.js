import React from 'react';
import './book.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book: {
                id: this.props.id,
                title: this.props.title,
                author: this.props.author,
                released: this.props.released,
                image: this.props.image
            }
        };
        
        this.callRefresh = this.refresh.bind(this);
    }

    refresh(newBook) {
        this.setState({book: newBook});
    }

    componentDidUpdate(prevProps) {
        if (this.props.title !== prevProps.title ||
            this.props.author !== prevProps.author ||
            this.props.image !== prevProps.image ||
            this.props.released !== prevProps.released)
        {
            const newBook = {
                id: this.props.id,
                title: this.props.title,
                author: this.props.author,
                image: this.props.image,
                released: this.props.released
            };
            this.callRefresh(newBook);
        }
    }

    render() {
        var titleImageAlt = '"' + this.state.book.title + '" cover (' + this.state.book.id + ')';

        return (
            <div className="book">
                <img src={this.state.book.image} className="book-image" alt={titleImageAlt} />
                <div className="book-list-info">
                    <ul className="book-list">
                        <li className="book-list-item"><b>"{this.state.book.title}"</b></li>
                        <li className="book-list-item"><i>by</i> {this.state.book.author}</li>
                        <li className="book-list-item"><i>released</i> {this.state.book.released}</li>
                        {/* <li className="book-list-item"><i>id</i> {this.state.book.id}</li> */}
                    </ul>
                </div>
                <div className="control-buttons-div">
                    <button className="edit-button" onClick={() => this.props.handleEditClick(this.state.book)}>
                        <FontAwesomeIcon icon={["fas", "edit"]} size="2x"/>
                    </button>
                    <button className="delete-button" onClick={() => this.props.handleDeleteClick(this.state.book)}>
                        <FontAwesomeIcon icon={["fas", "trash-alt"]} size="2x"/>
                    </button>
                </div>
            </div>
        );
    }
}

export default Book;