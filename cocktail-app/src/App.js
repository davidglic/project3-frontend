import './App.css';
import {Link, Route} from "react-router-dom";
import Header from './components/Header';
import Signup from './components/Signup';
import Landing from './components/Landing';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route
        path="/"
        exact render={() => <Landing/>}
      />
      <Route
        path ="/signup"
        render={() => <Signup/>}
      />
    </div>
  );
}

export default App;
