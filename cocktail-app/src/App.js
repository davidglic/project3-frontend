import './App.css';
import {Link, Route} from "react-router-dom";
import Header from './components/Header';
import Signup from './components/Signup';
import Landing from './components/Landing';
import Profile from './components/Profile';
import DrinkStream from './components/DrinkStream';

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
      <Route
        path="/profile/:id"
        render={() => <Profile/>}
      />
      <Route
        path="/drinkstream"
        exact render={() => <DrinkStream/>}
      />
    </div>
  );
}

export default App;
