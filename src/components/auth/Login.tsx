import React from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';
import {Redirect} from 'react-router-dom';

type LoginProps = {
    email: string;
    password: string;
    setEmail: (e: any)=> any;
    setPassword: (e: any) => any;
    sessionToken: any;
    updateToken: any;
    getToken: any;
}


class Login extends React.Component<LoginProps, {redirect: null | string}> {
    constructor(props: LoginProps) {
        super(props)
        this.state = {
            redirect: null
        }
    }
    
    handleSubmit = (event: any) => {
        event.preventDefault();
        fetch(`http://localhost:3000/user/login`, {
            method: 'POST',
            body: JSON.stringify({
                user: {
                    email: this.props.email,
                    password: this.props.password
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
            .then((response) => {
                if (response.status === 200) {
                    console.log("Login is successful.");

                } else {
                    console.log("Login has failed.");
                }
                return response.json();
            })
            
            .then((data) => {
                (this.props.updateToken(data.sessionToken));
                (this.setState({redirect: '/userhomepage'}));
            })
    }

 render() {
     
     if (this.state.redirect) {
         return <Redirect to = {this.state.redirect} />
     }
    return (
        <div>

    <Row></Row>
          <Card className="logincard"> 
                    <Form className="loginform" onSubmit={this.handleSubmit}>
                    <Label><h1>Login</h1></Label>    
                    <FormGroup>   
                    <Label htmlFor="email" className="email">Email</Label>
                    <br/>
                    <Input  
                        className="email" 
                        name="email"  
                        placeholder="enter email" 
                        onChange={(e) =>
                        this.props.setEmail(e.target.value)}
                        value={this.props.email}
                        />
                    <br/>
                    </FormGroup>


                    <FormGroup>
                    <Label htmlFor="password"className="password">Password</Label>
                    <br/>
                    <Input 
                    className="password"
                    name="password"  
                    placeholder="enter password" 
                    onChange={(e) =>
                        this.props.setPassword(e.target.value)}
                        value={this.props.password}
                     />
                    </FormGroup> 
                    <br/>
                    <Button 
                    type="submit">Submit</Button>
                    </Form>
                </Card>
          
   
</div>
    )
}
}


export default (Login);


