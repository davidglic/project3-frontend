import './App.css';
import {Link, Route} from "react-router-dom";
import Header from './components/Header';
import Signup from './components/Signup';

function App() {
  return (
    <div className="App">
      <Header/>
      <Route
        path ="/signup"
        render={() => <Signup/>}
      />
    </div>
  );
}

export default App;
