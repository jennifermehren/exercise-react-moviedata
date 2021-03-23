import './App.css';


import moviedata from './moviedata';
import Movies from './components/Movies';
import Header from './Header';
import Search from './components/Search';
function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Movies data={moviedata}/>
    </div>
  );
}

export default App;
