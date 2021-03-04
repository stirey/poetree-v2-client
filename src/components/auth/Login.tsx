import React from 'react';
import { Row,Button, Form, FormGroup, Label, Input, Card } from 'reactstrap';
import APIURL from '../../helpers/environment'


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
        fetch(`${APIURL}/user/login`, {
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
                console.log(data)
                if (this.props.email && this.props.password){
                //line 50 props passed down from App.tsx, see two paramters below
                this.props.updateToken(data.sessionToken, data.user.id);
                this.setState({redirect: '/userhomepage'});
                } else {
                    console.log("login fields are incomplete")
                }
            })
    }

 render() {
      
    return (
        <div>

    <Row></Row>
          <Card className="logincard"> 
                    <Form className="loginform" onSubmit={this.handleSubmit}>
                    <Label><h1 className="headerTxt">Login</h1></Label>    
                    <FormGroup>   
                    <Label htmlFor="email" className="headerTxt">Email</Label>
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
                    type="password"
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


