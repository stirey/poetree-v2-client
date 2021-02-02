import React from 'react';
import {  Row,   Button } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';


import Menu from '../site/Menu';
import CreatePoetry from '../poetry/CreatePoetry';
import ViewAllPoems from '../poetry/ViewAllPoems';
import ViewMyPoems from '../poetry/ViewMyPoems';
import Contact from '../site/Contact';



type UserHomepageProps = {
    sessionToken: any;
    clearToken: any;
      
}

type UserHomepageState = {
    
}

//these are the states in this component. UserHomepage is the parent of CreatePoetry.
//I don't need type states here because it is already in the child (createPoetry) I only need to setState in one place. It could be in this compoenent and then I wouldn't need it in CreatePoetry.
//Add a ternary to change the views on the homepage
// add a fetch/handlesubmit for the like button to synce with database


class UserHomepage extends React.Component<UserHomepageProps, {}> {
    constructor(props: UserHomepageProps) {
        super(props)
                      
}

// THIS IS THE INCREMENT FUNCTION. DO I NEED THIS? IS THERE ANOTHER APPROACH? THIS GOES INTO VIEW ALL POEMS LIKE BUTTON
            
    
    render() {
        return(
            <div>
                
                    <Row className="logoutBtnRow">
                        <Button className="logoutBtn" href="/" onClick={this.props.clearToken}>Logout</Button>
                    </Row>
                    <Menu />

                    {/* <Route path='/contact'>
                        <Contact />   
                    </Route> */}
                    <Switch>

                     
                    <Route path='/poetry/create'>
                        <CreatePoetry
                         sessionToken={this.props.sessionToken}
                        />
                    </Route>
            {/* the order of routes is important, and the browser will prioritize the route that can be resolved the quickest and then it stops */}
                

                    <Route path='/poetry/mine'>
                        <ViewMyPoems  sessionToken={this.props.sessionToken}/>
                    </Route>
                    
                    <Route path='/poetry/'>
                        <ViewAllPoems sessionToken={this.props.sessionToken}  />
                    </Route>                                      
                    </Switch>
                    
                       
            </div>
        )
    }
}

export default UserHomepage;

// fontawesome tutorial for react
// https://www.youtube.com/watch?v=QZSxSjKmW_Y