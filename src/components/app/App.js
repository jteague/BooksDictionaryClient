import React from 'react';
import BookCollection from '../bookcollection/bookcollection.js';
import CssBaseline from '@material-ui/core/CssBaseline';
//import { ThemeProvider } from '@material-ui/core/styles';
import './App.css';
import AddBookDialog from '../dialogs/addBookDialog.js';

//const theme = {};

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <ThemeProvider theme={theme}></ThemeProvider> */}
      <div className="App">
        <header className="App-header">
          <h1>Welcome to your Book Collection</h1>
        </header>

        <div className='books-container'>
          <BookCollection />
        </div>
        
        <div className="actions-container">
          <AddBookDialog/>
        </div>
  
      </div>
    </React.Fragment>
    );
}

export default App;
