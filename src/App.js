import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <Home></Home>



      </Router>
      


    </div>
  );
}

export default App;
