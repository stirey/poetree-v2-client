import React from 'react';
import { Container, Button, Row } from 'reactstrap';
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
             
                    <Route path="/user">
                    <Register
                     email={this.state.email}
                     password={this.state.password}
                     setEmail={this.state.setEmail}
                     setPassword={this.state.setPassword}
                     sessionToken={this.state.sessionToken}
                     updateToken={this.state.updateToken}
                     getToken={this.state.getToken} />  
                    </Route>

                    <Route path="/user">
                    <Login 
                    email={this.state.email}
                    password={this.state.password}
                    setEmail={this.state.setEmail}
                    setPassword={this.state.setPassword}
                    sessionToken={this.state.sessionToken}
                    updateToken={this.state.updateToken}
                    getToken={this.state.getToken} />
                    </Route>
                
                
            </Row> 
        </Container>
    )
}
}

export default Auth;