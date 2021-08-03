
import './App.css';
import './styles/navbar.css'
import './styles/user.css'
import './styles/home.css'
import './styles/newcontact.css'
import './styles/view.css'
import './styles/toggle.css'
import Home from './pages/Home';
import {Route,Switch} from 'react-router-dom';
import About from './pages/About';
import NavBar from './Components/NavBar';
import NewContact from './pages/NewContact';
import View from './pages/View';
import Edit from './pages/Edit';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <NavBar/>
      </div>
      <div className="content">
    <Switch>
      <Route path="/about" exact><About/></Route>
      <Route path="/addnewcontact" exact><NewContact/></Route>
      <Route path="/user/view/:id" exact><View/></Route>
      <Route path="/user/edit/:id" exact><Edit/></Route>
      <Route path="/" ><Home/></Route>
    </Switch>
      </div>
      {/* <div className="footer">
        <p>copyright &copy; 2019-2003. Navneet Kumar</p>
      </div> */}
    </div>
  );
}

export default App;
