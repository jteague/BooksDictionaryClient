import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { addBook, editBook } from '../../services/bookService';

class AddBookDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open,
      editMode: false,
      book: {
        id: this.props.book.id,
        title: this.props.book.title,
        author: this.props.book.author,
        released: this.props.book.released,
        image: this.props.book.image,
      }
     };
    this.handleClose = this._handleClose.bind(this);
    this.handleAddOrEdit = this._handleAddOrEdit.bind(this);
    this.handleClickOpen = this._handleClickOpen.bind(this);
    this.handleInputChange = this._handleInputChange.bind(this);
  }

  _handleClose() {
    this.setState({ open: false });
    this.setState({editMode: false});
  }

  _handleClickOpen() {
    if (this.state.editMode === false) {
      this.setState({book: {
        id: '',
        title: '',
        author: '',
        released: 2021,
        image: 'http://',
      }})
    }
    this.setState({ open: true });
  }

  _handleAddOrEdit() {
    if (this.state.editMode === true) {

      editBook(this.state.book).then(res => {
        // close the dialog
        this.handleClose();

        // instruct the parent to refresh the books
        this.props.refreshBookCollection();
      }).catch(err => {
        console.error(err);
        alert('Failed to edit the book: ' + err);
      });
    } else {
      addBook(this.state.book).then(res => {
        // close the dialog
        this.handleClose();

        // instruct the parent to refresh the books
        this.props.refreshBookCollection();
      }).catch(err => {
        console.error(err);
        alert('Failed to add the book: ' + err);
      });
    }
  }

  _handleInputChange(event) {
    const key = event.target.id;
    const value = event.target.value;
    const newBookValues = {...this.state.book, [key]: value};
    this.setState({book: newBookValues});
  }
  
  render(){
    var addOrEdit = this.state.editMode === true ? 'Edit' : 'Add';
    return (
    <div>
      <Button variant="contained" onClick={this.handleClickOpen}>
        Add a book
      </Button>
      <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{addOrEdit} book</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            fullWidth
            value={this.state.book.title}
            onChange={this.handleInputChange}
          />
          <TextField
            margin="dense"
            id="author"
            label="Author"
            fullWidth
            value={this.state.book.author}
            onChange={this.handleInputChange}
          />
          <TextField
            margin="dense"
            id="released"
            label="Year Released"
            type="number"
            fullWidth
            value={this.state.book.released}
            onChange={this.handleInputChange}
          />
          <TextField
            margin="dense"
            id="image"
            label="Image URL"
            fullWidth
            value={this.state.book.image}
            onChange={this.handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleAddOrEdit} color="primary">
            {addOrEdit}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
  }
}

export default AddBookDialog;