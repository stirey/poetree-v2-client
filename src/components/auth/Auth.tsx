
import React from 'react';
import { Container, Row, Col, Button, CardImg, Card} from 'reactstrap';
import Login from './Login';
import Register from './Register';
import Forest from '../assets/forest.png';
import Tree from '../assets/tree.png';

type AuthStates = {
    email: string;
    password: string;
    setEmail: (e: any) => any;
    setPassword: (e: any) => any;
    sessionToken: any;
    updateToken: any;
    getToken: any;
    signup: boolean;

}

class Auth extends React.Component<{updateToken: any}, AuthStates> {
    constructor(props: any){
        super(props)
        this.state = {
            email: "",
            password: "",
            sessionToken: "",
            getToken: "",
            updateToken: "",
            signup: true,
            setEmail: (e) => {
                this.setState({
                    email: e
                })
            },
            setPassword: (e) => {
                this.setState({
                    password: e
                })
            },

        }
    }
    
    render() {
    return (
        <Container className="auth-container">
        
            <Row>
               
               { this.state.signup ?
                    <Col>
                        
                        <Register
                        email={this.state.email}
                        password={this.state.password}
                        setEmail={this.state.setEmail}
                        setPassword={this.state.setPassword}
                        sessionToken={this.state.sessionToken}
                        updateToken={this.props.updateToken}
                        getToken={this.state.getToken} />
                       
                    </Col>
                    :
                    <Col>
                    
                        <Login 
                        email={this.state.email}
                        password={this.state.password}
                        setEmail={this.state.setEmail}
                        setPassword={this.state.setPassword}
                        sessionToken={this.state.sessionToken}
                        updateToken={this.props.updateToken}
                        getToken={this.state.getToken} />
                       
                    </Col>
                }
                

                    
                    <Col className="treeCol">
                    <CardImg type="image" className="treeIconHome" top width="100%" src={Tree} alt="image of a tree" />
                    </Col>
                    
            </Row> 


            <Row>
                    <Col className="authbtn">
                        <Button onClick={() => { 
                        this.setState({
                        signup: !this.state.signup
                        })
                        }}>{ this.state.signup?
                         "Already have a login? Click here." : 
                         "Need a login? Click here."}
                        </Button>
                    </Col>
                <Col></Col>

                        
            </Row>

        </Container>
    )
}
}

export default Auth;