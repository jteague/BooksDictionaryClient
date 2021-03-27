import Book from '../book/book';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>

      <div className='books-container'>
        <div className='books-inner'>
          <Book title='My Life' author='Mofo McMiah' released='1978' image='http://choicecityseven.com/Images/members/jeremiah.jpg'/>
          <Book title='Her Life' author='Mofo McKaytay' released='1980' image='https://wallpapertag.com/wallpaper/full/2/2/7/574033-amazing-hello-kitty-easter-wallpaper-1080x1920-phone.jpg'/>
          <Book title='The Boy' author='Mofo McReesey' released='2017' image='https://sep.yimg.com/ay/blaircandy/reese-s-pieces-48oz-bag-43.jpg'/>
        </div>
      </div>

    </div>
  );
}

export default App;
