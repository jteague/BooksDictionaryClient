import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
//import { ThemeProvider } from '@material-ui/core/styles';
import {library} from "@fortawesome/fontawesome-svg-core";
import {fas} from "@fortawesome/free-solid-svg-icons";
import BookCollection from '../bookcollection/bookcollection.js';
import './App.css';

//const theme = {};

library.add(fas);

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
      </div>
    </React.Fragment>
    );
}

export default App;
