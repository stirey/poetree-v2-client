import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import Login from './Login';
import Register from './Register';
import { Switch, Route} from 'react-router-dom'

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
                    <Col md="6">    
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
                    <Col md="6">
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

              <Button onClick={() => { 
                  this.setState({
                      signup: !this.state.signup
                  })
              }   }>{ this.state.signup? "Already have a login? Click here." : "Need a login? Click here."}</Button>
              
            </Row> 
        </Container>
    )
}
}

export default Auth;