import React from 'react';
import {  Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';
import APIURL from '../../helpers/environment';


type RegisterProps = {
    email: string;
    password: string;
    setEmail: (e: any)=> any;
    setPassword: (e: any) => any;
    sessionToken: any;
    updateToken: any;
    getToken: any; 
}


class Register extends React.Component<RegisterProps, {redirect: null | string}> {
    constructor(props: RegisterProps) {
        super(props)
        this.state = {
            redirect: null
        }
        }

        handleSubmit = (event: any) => {
            event.preventDefault();
            fetch(`${APIURL}/user/create`, {
                method: 'POST',
                body: JSON.stringify({
                    user: {
                        email: this.props.email,
                        password: this.props.password, 
                    }
                }),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            }).then((response) => {
                    if (response.status === 200) {
                        console.log("Registration is successful.");
                    } else {
                        console.log("Registration has failed.");
                    }
                    return response.json();
                })
                .then((data) => {
                    console.log(data);
                    // checking to see if both input fields are complete before it updates token
                    if (this.props.email && this.props.password){
                    // here we are giving the paramter of updateToken
                    this.props.updateToken(data.sessionToken, data.user.id);
                    // if the inputs are complete and correct, it will redirect the user to the verified homepage
                    this.setState({redirect: '/userhomepage'});
                } else {
                    //if inputs are incomplete or incorrect, it will prompt a modal informing user of error
                    console.log("registration info incomplete")
                    // this.props.openModal();
                }
                })
        }

    
 render() {
   
    return (
        <div>
            <Card id="logincard">  
                <Form className="loginform" onSubmit={this.handleSubmit}>
                    <Label><h1 className="headerTxt">Signup</h1></Label>    
                        <FormGroup>   
                            <Label htmlFor="email" className="email">Email</Label>
                            <br/>

                            <Input  
                            className="email" 
                            placeholder="enter email"
                            onChange={(e) => this.props.setEmail(e.target.value)}
                            value={this.props.email} />
                            <br/>
                            </FormGroup>

                            <FormGroup>
                            <Label htmlFor="password"className="password">Password</Label>
                            <br/>
                            <Input 
                            type="password"
                            className="password" 
                            placeholder="enter password"  
                            onChange={(e) => this.props.setPassword(e.target.value)}
                            value={this.props.password} />
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
export default Register;



