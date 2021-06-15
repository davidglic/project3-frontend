import './App.css';
import {Link, Route} from "react-router-dom";
import Header from './components/Header';
import Signup from './components/Signup';
import Landing from './components/Landing';
import Profile from './components/Profile';

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
    </div>
  );
}

export default App;
