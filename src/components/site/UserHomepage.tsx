import React from 'react';
import { Container, Row, Button } from 'reactstrap';
import {  Route} from 'react-router-dom';

type UserHomepageProps = {
    sessionToken: any;
    clearToken: any;
}

type UserHomeStates = {
    
}

class UserHomepage extends React.Component<UserHomepageProps, UserHomeStates> {
    constructor(props: UserHomepageProps) {
        super(props);
       
    }
    render() {
        return(
            <div>
                <Container>
                    <Row>
                    
                    <p>this is a test of homepage</p>
                    <Button onClick={this.props.clearToken}>Logout</Button>
                    
                    </Row>
                </Container>
            </div>
        )
    }
}

export default UserHomepage;