import BookCollection from '../bookcollection/bookcollection.js';
import './App.css';

function App() {
  
  return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to your Book Collection</h1>
        </header>
  
        <div className='books-container'>
          <BookCollection />
        </div>
      </div>
    );
}

export default App;
