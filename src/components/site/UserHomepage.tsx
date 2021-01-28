import React from 'react';
import { Container, Row,  Col,  Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle  } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';
import Tree from '../assets/tree.png';

import Menu from '../site/Menu';
import CreatePoetry from '../poetry/CreatePoetry';
import ViewAllPoems from '../poetry/ViewAllPoems';
import ViewMyPoems from '../poetry/ViewMyPoems';
import UpdatePoetry from '../poetry/UpdatePoetry';
import DeletePoetry from '../poetry/DeletePoetry';


type UserHomepageProps = {
    sessionToken: any;
    clearToken: any;
}

//these are the states in this component. UserHomepage is the parent of CreatePoetry.
//I don't need type states here because it is already in the child (createPoetry) I only need to setState in one place. It could be in this compoenent and then I wouldn't need it in CreatePoetry.
//Add a ternary to change the views on the homepage


class UserHomepage extends React.Component<UserHomepageProps, {}> {
    constructor(props: UserHomepageProps) {
        super(props);
                
}
    
    render() {
        return(
            <div>
                
                    <Row className="logoutBtnRow">
                        <Button className="logoutBtn" href="/" onClick={this.props.clearToken}>Logout</Button>
                    </Row>
                    <Menu />
                    <Switch>
                    <Route path='/poetry/create'>
                        <CreatePoetry
                         sessionToken={this.props.sessionToken}
                        />
                    </Route>
            {/* the order of routes is important, and the browser will prioritize the route that can be resolved the quickest and then it stops */}
                    <Route path='/poetry/mine'>
                        <ViewMyPoems sessionToken={this.props.sessionToken}/>
                    </Route>
                    
                    <Route path='/poetry/'>
                        <ViewAllPoems />
                    </Route>

                    <Route path='/poetry/update'>
                        <UpdatePoetry  />
                    </Route>

                    <Route path='/poetry/delete'>
                        <DeletePoetry />
                    </Route>
                    
                    
                    </Switch>
                    
                       
            </div>
        )
    }
}

export default UserHomepage;

// fontawesome tutorial for react
// https://www.youtube.com/watch?v=QZSxSjKmW_Y