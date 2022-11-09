import logo from './logo.svg';
import './App.css';
import ArturPage from './ArturPage.jsx';

function App() {
  let pics = [require('../src/pics/triangle.jpeg'), require('../src/pics/nokia.jpeg'), require('../src/pics/nokia1.jpeg'), require('../src/pics/crush.jpeg')];

  let texts = ['Смотрите какой треугольный', 'Кто поставил фото этого идота', 'Карлик до сетки не достаёт', 'Даже инвалид быстрее его']

  let memes = ['https://i.imgflip.com/5sdtja.jpg'];
  return (
    <div className="App">
      <ArturPage pics={pics} texts={texts} memes = {memes}/>
    </div>
  );
}

export default App;
