import React from 'react';
import './book.css';

class Book extends React.Component {
    render() {
        const imageUrl = this.props.image;
        const title = this.props.title;
        const titleImageAlt = '"' + title + '" cover';
        const author = this.props.author;
        const released = this.props.released;

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
            </div>
        );
    }
}

export default Book;