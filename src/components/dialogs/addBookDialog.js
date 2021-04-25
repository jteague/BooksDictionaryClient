import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { addBook } from '../../services/bookService';

class AddBookDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      bookValues: {
        title: "",
        author: "",
        released: 2020,
        image: "http://",
      }
     };
    this.handleClose = this._handleClose.bind(this);
    this.handleAdd = this._handleAdd.bind(this);
    this.handleClickOpen = this._handleClickOpen.bind(this);
    this.handleInputChange = this._handleInputChange.bind(this);
  }

  _handleClose() {
    this.setState({ open: false });
  }

  _handleClickOpen() {
    this.setState({ open: true });
  }

  _handleAdd() {
    const response = addBook(this.state.bookValues);
    if (response) {
      this.setState({open: false});
      // todo: reload the page
    }
    else {
      alert('Failed to add the book');
    }
  }

  _handleInputChange(event) {
    const id = event.target.id;
    const value = event.target.value;
    const newBookValues = {...this.state.bookValues, [id]: value};
    this.setState({bookValues: newBookValues});
  }
  
  render(){
    return (
    <div>
      <Button variant="contained" onClick={this.handleClickOpen}>
        Add a book
      </Button>
      <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add a book</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Title"
            fullWidth
            value={this.state.bookValues.title}
            onChange={this.handleInputChange}
          />
          <TextField
            margin="dense"
            id="author"
            label="Author"
            fullWidth
            value={this.state.bookValues.author}
            onChange={this.handleInputChange}
          />
          <TextField
            margin="dense"
            id="released"
            label="Year Released"
            type="number"
            fullWidth
            value={this.state.bookValues.released}
            onChange={this.handleInputChange}
          />
          <TextField
            margin="dense"
            id="image"
            label="Image URL"
            fullWidth
            value={this.state.bookValues.image}
            onChange={this.handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={this.handleAdd} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
  }
}

export default AddBookDialog;