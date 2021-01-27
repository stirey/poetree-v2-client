import React from 'react'
import { Container, Form, FormGroup, Input  } from 'reactstrap';

type CreatePoetryProps = {
    sessionToken?: any;
 
}

type CreatePoetryStates = {
    question1: string;
    question2: string;
    question3: string;
    red: boolean;
    orange: boolean;
    yellow: boolean;
    green: boolean;
    blue: boolean;
    purple: boolean;
    black: boolean;
    gray: boolean;
    white: boolean;
    poemtitle: string;
    lineone: string;
    linetwo: string;
    linethree: string;
}

class CreatePoetry extends React.Component< CreatePoetryProps, CreatePoetryStates> {
    constructor(props: CreatePoetryProps) {
        super(props)
        this.state = { //initial state before any user input or anythign that will alter them
            question1: "",
            question2: "",
            question3: "",
            red: false,
            orange: false,
            yellow: false,
            green: false,
            blue: false,
            purple: false,
            black: false,
            gray: false,
            white: false,
            poemtitle: "",
            lineone: "",
            linetwo: "",
            linethree: "", 
        }; 
    }
    // when you use arrow functions you don't need to use bind

    handleSubmit = (event: any) => {
        event.preventDefault();
        fetch(`http://localhost:3000/poetry/create`, {
            method: 'POST',
            body: JSON.stringify({
                poetry: { //talking to the backend
                    question1: this.state.question1,
                    question2: this.state.question2,
                    question3: this.state.question3,
                    red: this.state.red,
                    orange: this.state.orange,
                    yellow: this.state.yellow,
                    green: this.state.green,
                    blue: this.state.blue,
                    purple: this.state.purple,
                    black: this.state.black,
                    gray: this.state.gray,
                    white: this.state.white,
                    poemtitle: this.state.poemtitle,
                    lineone: this.state.lineone,
                    linetwo: this.state.linetwo,
                    linethree: this.state.linethree,
                }
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
            .then((response) => response.json())
               
            .then((poetry) => {
                console.log(poetry);
               this.setState(
                   {//this is resetting the state back to default for next post
                       question1: "",

                   }
               )

            })
        }
        render() {
            return (
                <div>
                <Container> 
                    console.log('this is working');  
                <h3>Create a Poem!</h3>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Input
                        className="question1"
                        type="textarea"
                        onChange={(e) => {this.setState({question1: e.target.value })}}
                        value={this.state.question1}>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Input
                        className="question2"
                        type="textarea"
                        onChange={(e) => {this.setState({question2: e.target.value })}}
                        value={this.state.question2}>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Input
                        className="question3"
                        type="textarea"
                        onChange={(e) => {this.setState({question3: e.target.value })}}
                        value={this.state.question3}>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Input
                        type="checkbox"
                        name="color"
                        checked={this.state.red}
                        //anonymous arrow function-helpful for doing mutltiple actions within the function
                        onClick ={ () => {
                        
                            this.setState({
                               red: true 
                            })
                        }}
                        ></Input>
                   
                        <Input
                        type="radio"
                        name="color"
                        value= "orange"
                        checked={this.state.orange === true}
                        onClick ={ () => {
                        
                            this.setState({
                               orange: true 
                            })
                        }}
                        ></Input>
                    
                        <Input
                        type="radio"
                        name="color"
                        value= "yellow"
                        checked={this.state.yellow === !false}
                        onClick ={ () => {
                        
                            this.setState({
                               yellow: true 
                            })
                        }}
                        ></Input>
                    
                        <Input
                        type="radio"
                        name="color"
                        value= "green"
                        checked={this.state.green === !false}
                        onChange={this.handleSubmit}
                        ></Input>

                        <Input
                        type="radio"
                        name="color"
                        value= "blue"
                        checked={this.state.blue === !false}
                        onClick ={ () => {
                        
                            this.setState({
                               blue: true 
                            })
                        }}
                        ></Input>

                        <Input
                        type="radio"
                        name="color"
                        value= "purple"
                        checked={this.state.purple === !false}
                        onClick ={ () => {
                        
                            this.setState({
                               purple: true 
                            })
                        }}
                        ></Input>

                        <Input
                        type="radio"
                        name="color"
                        value= "black"
                        checked={this.state.black === !false}
                        onClick ={ () => {
                        
                            this.setState({
                               black: true 
                            })
                        }}
                        ></Input>

                        <Input
                        type="radio"
                        name="color"
                        value= "gray"
                        checked={this.state.gray === !false}
                        onClick ={ () => {
                        
                            this.setState({
                               gray: true 
                            })
                        }}
                        ></Input> 

                        <Input
                        type="radio"
                        name="color"
                        value= "white"
                        checked={this.state.white === !false}
                        onClick ={ () => {
                        
                            this.setState({
                               white: true 
                            })
                        }}
                        ></Input>           
                    </FormGroup>
                    <FormGroup>
                        <Input
                        className="poemtitle"
                        type="text"
                        onChange={(e) => {this.setState({poemtitle: e.target.value })}}
                        value={this.state.poemtitle}>
                        </Input>

                        <Input
                        className="lineone"
                        type="text"
                        onChange={(e) => {this.setState({lineone: e.target.value })}}
                        value={this.state.lineone}>
                        </Input>

                        <Input
                        className="linetwo"
                        type="text"
                        onChange={(e) => {this.setState({linetwo: e.target.value })}}
                        value={this.state.linetwo}>
                        </Input>

                        <Input
                        className="linethree"
                        type="text"
                        onChange={(e) => {this.setState({linethree: e.target.value })}}
                        value={this.state.linethree}>
                        </Input>

                    </FormGroup>                  
                </Form>

                </Container> 
                </div>
            )
        }}
                
export default CreatePoetry;