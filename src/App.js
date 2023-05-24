import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <input type='text' placeholder='Hello, This is CSCI 5709 Course' size={100}>
        </input>
        <button>
          Submit
        </button> */}
        <p>
          Hello, This is CSCI 5709 Course
        </p>
      </header>
    </div>
  );
}

export default App;
