import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

type UserHomepageProps = {
    sessionToken: any;
}

type UserHomeStates = {
    sessionToken: any;
}

class UserHomepage extends React.Component<UserHomepageProps, UserHomeStates> {
    constructor(props: UserHomepageProps) {
        super(props);
        this.state = {
            sessionToken: ""
        }
    }

    render() {
        return(
            <div>
                <Container>
                    <Row>
                    <Route exact path='/userhomepage'>
                    <p>this is a test of homepage</p>
                    </Route>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default UserHomepage;