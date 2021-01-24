import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/site/Header'
import Auth from './components/auth/Auth'
import UserHomepage from './components/site/UserHomepage'

type AppStates = {
  sessionToken: any,  
   
}

class App extends React.Component<{}, AppStates> {
  
  
  
  constructor(props: any) {
    super(props);
    
    this.state = {
      sessionToken: "",
   
    }
    

  }
 


  getToken = () => {
    if (localStorage.getItem('token')) {
      this.setState({ sessionToken: localStorage.getItem('token')});
      
    }
  }
// this changes the state of this particular token, when someone signs up we want it to change it to their token so they can access their "stuff"
  updateToken = (newToken: string) => {
    localStorage.setItem('token', newToken);
    this.setState({ sessionToken: newToken});
    console.log(newToken);
  }

  clearToken = () => {
    localStorage.clear();
    this.setState({ sessionToken: ''});
  }

 componentWillMount() { 
    this.getToken();
    
    
  }

  // componentDidMount() {
  //   setInterval(() => this.getToken(), 1000);
  
  // }

render() {

  return (
    <div className="App">
     <div className="verticalCenter">
              
            <Header clearToken={this.clearToken} />

            <Router>
            <Switch>
              <Route path="/user">
              <Auth updateToken={this.updateToken}/> 
              </Route>

              <Route path='/userhomepage'>
              <UserHomepage sessionToken={this.state.sessionToken} />
              </Route>


            </Switch>  
            </Router>
    </div>
    </div>
  );
}
}



export default App;



