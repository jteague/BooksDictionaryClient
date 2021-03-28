import BookCollection from '../bookcollection/bookcollection.js';
import './App.css';

function App() {
  
  let books = [
    {_id: 0, title: 'My Life', author: 'Mofo McMiah', released: 1978, image: 'http://choicecityseven.com/Images/members/jeremiah.jpg'},
    {_id: 1, title: 'Her Life', author: 'Mofo McKaytay', released: 1980, image: 'https://wallpapertag.com/wallpaper/full/2/2/7/574033-amazing-hello-kitty-easter-wallpaper-1080x1920-phone.jpg'},
    {_id: 2, title: 'The Boy', author: 'Mofo McReesey', released: 2017, image: 'https://sep.yimg.com/ay/blaircandy/reese-s-pieces-48oz-bag-43.jpg'},
    {_id: 3, title: 'Another?', author: 'Mofo McQuestion', released: 2021, image: 'http://getdrawings.com/image/question-mark-drawing-51.jpg'},
    {_id: 4, title: 'Another?', author: 'Mofo McQuestion', released: 2021, image: 'http://getdrawings.com/image/question-mark-drawing-51.jpg'},
  ];

  const url = 'http://localhost:3080/api/getAllBooks';
  fetch(url)
    .then((result) => result.json())
    .then(function(data) {
      books = data;
      console.log(data);
      // todo: how to update the render
    })
    .catch((error) => console.log(error));

    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to your Book Collection</h1>
        </header>
  
        <div className='books-container'>
          <BookCollection books={books} />
        </div>
      </div>
    );
}

export default App;
