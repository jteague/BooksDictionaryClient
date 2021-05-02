import React from 'react';
import './book.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            book: {
                title: this.props.title,
                author: this.props.author,
                released: this.props.released,
                image: this.props.image
            }
        };
    }

    render() {
        const imageUrl = this.state.book.image;
        const title = this.state.book.title;
        const titleImageAlt = '"' + title + '" cover';
        const author = this.state.book.author;
        const released = this.state.book.released;

        return (
            <div className="book">
                <img src={imageUrl} className="book-image" alt={titleImageAlt} />
                <div className="book-list-info">
                    <ul className="book-list">
                        <li className="book-list-item"><b>"{title}"</b></li>
                        <li className="book-list-item"><i>by</i> {author}</li>
                        <li className="book-list-item"><i>released</i> {released}</li>
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