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

type UserHomepageState = {
    incrementMe: number;
    setIncrementMe: (e: number) => any;
    like: number;
    setLike: (e: number) => any;
}

//these are the states in this component. UserHomepage is the parent of CreatePoetry.
//I don't need type states here because it is already in the child (createPoetry) I only need to setState in one place. It could be in this compoenent and then I wouldn't need it in CreatePoetry.
//Add a ternary to change the views on the homepage
// add a fetch/handlesubmit for the like button to synce with database


class UserHomepage extends React.Component<UserHomepageProps, UserHomepageState> {
    constructor(props: UserHomepageProps) {
        super(props)
        this.state = {
            incrementMe: 0,
            like: 0,
            
            setIncrementMe: (e) => {
                this.setState({
                    incrementMe: e
                })
            },
            setLike: (e) => {
                this.setState({
                    
                    like: e
                })
                console.log(this.state.like) 
            }}
         this.incrementMe = this.incrementMe.bind(this);              
}
            incrementMe = () => {
                let newCount = this.state.like + 1
                this.setState({
                    like: newCount
                })
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
                        <ViewAllPoems incrementMe={this.state.incrementMe} setIncrementMe={this.state.setIncrementMe} like={this.state.like}  />
                    </Route>


                    {/* <Route path='/poetry/update'>
                        <UpdatePoetry sessionToken={this.props.sessionToken}/>
                    </Route> */}

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