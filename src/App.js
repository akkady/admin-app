import AdminMain from "./admin-template/AdminMain"
import LoginComponent from './login/LoginComponent'
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom';



function App() {
  return (
    <div className="App">
       <Router>
          <Switch>
              <Route exact path = "/"  component= {LoginComponent}/>
              <Route path= "/adminMain" component = {AdminMain}/>
              <Route path = "/logout" component = {LoginComponent} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
