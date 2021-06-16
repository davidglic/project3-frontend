import './App.css';
import {Link, Route} from "react-router-dom";
import Header from './components/Header';
import Signup from './components/Signup';
import Landing from './components/Landing';
import Profile from './components/Profile';
import DrinkStream from './components/DrinkStream';
import Search from './components/Search';
import Drink from './components/Drink';

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
        render={() => <DrinkStream/>}
      />
            <Route
        path="/search"
        render={() => <Search/>}
      />
      <Route
        path="/drink/:id"
        render={() => <Drink/>}
      />
    </div>
  );
}

export default App;
