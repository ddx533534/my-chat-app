import logo from './logo.svg';
import './App.css';

function App() {
  const { Search } = Input;
  return (
    <div className="App">
      <Search searchText placeholder="input search text" />
    </div>
  );
}

export default App;
