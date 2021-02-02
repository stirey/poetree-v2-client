import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/site/Header'
import Banner from './components/site/Banner';
import Footer from './components/site/Footer';
import Auth from './components/auth/Auth'
import UserHomepage from './components/site/UserHomepage'
import Homepage from './components/site/Homepage';


type AppStates = {
  sessionToken: any, 
  userId: string, 
  
}



class App extends React.Component<{}, AppStates> {
  constructor(props: any) {
    super(props);
    this.state = {
      sessionToken: "",
      userId: "",
   
    } 
  }
 
  getToken = () => {
    if (localStorage.getItem('token')) {
      this.setState({ sessionToken: localStorage.getItem('token')});
    }
  }
// this changes the state of this particular token, when someone signs up we want it to change it to their token so they can access their "stuff"
  updateToken = (newToken: string, userId: string) => {
    localStorage.setItem('token', newToken);
    this.setState({ sessionToken: newToken});
    //what we name this it shows up in the developer tools ('id')
    localStorage.setItem('id', userId);
    // the parameter of this function is userId
    this.setState({ userId: userId});

    console.log(newToken);
  }

  clearToken = () => {
    localStorage.clear();
    this.setState({ sessionToken: ''});
  }
// this will run as soon as someone lands on the component-all the get info is established

 componentDidMount() { 
    this.getToken();
    console.log('this is a test')
    
  }


render() {

  return (
    <div className="App">
     <div className="verticalCenter">

             <Router>
               <Header />
               <Banner />
               
               <Switch>
                
                 {/* if there is no sessiontoken show auth, if there is one, show userhomepage  */}
              { !this.state.sessionToken ? 
                 <Route path='/'>
                  <Auth updateToken={this.updateToken} />
                 </Route>
                  :
                 <UserHomepage 
                 sessionToken={this.state.sessionToken} 
                 clearToken={this.clearToken}
                 /> 
              }     
                
              </Switch>
             </Router>
             <Footer />
            
    </div>
    </div>
  );
}
}                 
export default App;


              

            
          
        









