import React from 'react'
import { Container, Form, FormGroup, Input, Label, Button, Row,Col, Card } from 'reactstrap';

type CreatePoetryProps = {
    sessionToken?: any;
 
}

type CreatePoetryStates = {
    // question1: string;
    // question2: string;
    // question3: string;
    // red: boolean;
    // orange: boolean;
    // yellow: boolean;
    // green: boolean;
    // blue: boolean;
    // purple: boolean;
    // pink: boolean;
    // black: boolean;
    // brown: boolean;
    // gray: boolean;
    // white: boolean;
    poemtitle: string;
    lineone: string;
    linetwo: string;
    linethree: string;
    event: number;
}

class CreatePoetry extends React.Component< CreatePoetryProps, CreatePoetryStates> {
    constructor(props: CreatePoetryProps) {
        super(props)
        this.state = { //initial state before any user input or anythign that will alter them
            // question1: "",
            // question2: "",
            // question3: "",
            // red: false,
            // orange: false,
            // yellow: false,
            // green: false,
            // blue: false,
            // purple: false,
            // pink: false,
            // black: false,
            // brown: false,
            // gray: false,
            // white: false,
            poemtitle: "",
            lineone: "",
            linetwo: "",
            linethree: "", 
            event: 0,
        }; 
    }
    // when you use arrow functions you don't need to use bind

    handleSubmit = (event: any) => {
        event.preventDefault();
        fetch(`http://localhost:3000/poetry/create`, {
            method: 'POST',
            body: JSON.stringify({
                poetry: { //talking to the backend
                    // question1: this.state.question1,
                    // question2: this.state.question2,
                    // question3: this.state.question3,
                    // red: this.state.red,
                    // orange: this.state.orange,
                    // yellow: this.state.yellow,
                    // green: this.state.green,
                    // blue: this.state.blue,
                    // purple: this.state.purple,
                    // pink: this.state.pink,
                    // black: this.state.black,
                    // brown: this.state.brown,
                    // gray: this.state.gray,
                    // white: this.state.white,
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
        }).then((response) => response.json())
        .then((poetry) => {
                console.log(poetry);
               this.setState(
                   {//this is resetting the state back to default for next post
                        // question1: "",
                        // question2: "",
                        // question3: "",
                        // red: false,
                        // orange: false,
                        // yellow: false,
                        // green: false,
                        // blue: false,
                        // purple: false,
                        // pink: false,
                        // black: false,
                        // brown: false,
                        // gray: false,
                        // white: false,
                        poemtitle: "",
                        lineone: "",
                        linetwo: "",
                        linethree: ""
                   }
               )
            })
        }
 
        incrementAcorns = (event: any) => {
            fetch(`http://localhost:3000//create/${event}`,
            {
                method: 'POST',

                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': this.props.sessionToken
                })
            })
            .then((response) => response.json())
    
            .catch((err) => console.log(err))
  
        } 

       
           
        render() {
            return (
                <div>
                <Container> 
                <Card className="createPoetryCard">    
                <h3 className="headerTxtHaiku">Create a Haiku!</h3>
                <Form className="createForm" onSubmit={this.handleSubmit}>
                    {/* <FormGroup>
                    <Label>Question 1</Label>
                        <Input
                        className="question1"
                        type="textarea"
                        onChange={(e) => {this.setState({question1: e.target.value })}}
                        value={this.state.question1}>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                    <Label>Question 2</Label>
                        <Input
                        className="question2"
                        type="textarea"
                        onChange={(e) => {this.setState({question2: e.target.value })}}
                        value={this.state.question2}>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                    <Label>Question 3</Label>
                        <Input
                        className="question3"
                        type="textarea"
                        onChange={(e) => {this.setState({question3: e.target.value })}}
                        value={this.state.question3}>
                        </Input>
                    </FormGroup>
                    <Row>
                    <Label>Red</Label>
                    <FormGroup>
                        <Col>
                        <Input
                        type="checkbox"
                        name="color"
                        checked={this.state.red === true}
                        //anonymous arrow function-helpful for doing mutltiple actions within the function
                        onClick ={ () => {
                        
                            this.setState({
                               red: true 
                            })
                        }}
                        ></Input>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col>
                    <Label>Orange</Label>
                        <Input
                        type="checkbox"
                        name="color"
                        value= "orange"
                        checked={this.state.orange === true}
                        onClick ={ () => {
                        
                            this.setState({
                               orange: true
                            })
                        }}
                         />{''}
                        </Col>
                        </FormGroup>
                        <Col>
                    <Label>Yellow</Label>
                        <Input
                        type="checkbox"
                        name="color"
                        value= "yellow"
                        checked={this.state.yellow === true}
                        onClick ={ () => {
                        
                            this.setState({
                               yellow: true 
                            })
                        }}
                        ></Input>
                        </Col>
                        <Col>
                    <Label>Green</Label>
                        <Input
                        type="checkbox"
                        name="color"
                        value= "green"
                        checked={this.state.green === true}
                        onClick ={ () => {
                        
                            this.setState({
                               green: true 
                            })
                        }}
                        ></Input>
                        </Col>
                        <Col>
                    <Label>Blue</Label>    
                        <Input
                        type="checkbox"
                        name="color"
                        value= "blue"
                        checked={this.state.blue === true}
                        onClick ={ () => {
                        
                            this.setState({
                               blue: true 
                            })
                        }}
                        ></Input>
                        </Col>
                        <Col>
                    <Label>Purple</Label>
                        <Input
                        type="checkbox"
                        name="color"
                        value= "purple"
                        checked={this.state.purple === true}
                        onClick ={ () => {
                        
                            this.setState({
                               purple: true 
                            })
                        }}
                        ></Input>
                        </Col>
                        <Col>
                    <Label>Pink</Label>
                        <Input
                        type="checkbox"
                        name="color"
                        value= "pink"
                        checked={this.state.pink === true}
                        onClick ={ () => {
                        
                            this.setState({
                               pink: true 
                            })
                        }}
                        ></Input>
                        </Col>
                        <Col>
                    <Label>Black</Label>
                        <Input
                        type="checkbox"
                        name="color"
                        value= "black"
                        checked={this.state.black === true}
                        onClick ={ () => {
                        
                            this.setState({
                               black: true 
                            })
                        }}
                        ></Input>
                        </Col>
                        <Col>
<                   Label>Brown</Label>
                        <Input
                        type="checkbox"
                        name="color"
                        value= "brown"
                        checked={this.state.brown === true}
                        onClick ={ () => {
                        
                            this.setState({
                               brown: true 
                            })
                        }}
                        ></Input>   
                        </Col>
                        <Col>
                    <Label>Gray</Label>
                        <Input
                        type="checkbox"
                        name="color"
                        value= "gray"
                        checked={this.state.gray === true}
                        onClick ={ () => {
                        
                            this.setState({
                               gray: true 
                            })
                        }}
                        ></Input> 
                        </Col>
                        <Col>
                    <Label>White</Label>
                        <Input
                        type="checkbox"
                        name="color"
                        value= "white"
                        checked={this.state.white === true}
                        onClick ={ () => {
                        
                            this.setState({
                               white: true 
                            })
                        }}
                        ></Input>
                        </Col>           
                    </Row> */}
                    <FormGroup>
                    <Label className="headerTxt">Poem Title</Label>
                        <Input
                        className="poemtitle"
                        type="text"
                        onChange={(e) => {this.setState({poemtitle: e.target.value })}}
                        value={this.state.poemtitle}>
                        </Input>

                    <Label className="headerTxt">Line One: 5 syllables</Label>
                        <Input
                        className="lineone"
                        type="text"
                        onChange={(e) => {this.setState({lineone: e.target.value })}}
                        value={this.state.lineone}>
                        </Input>
                    
                    <Label className="headerTxt">Line Two: 7 syllables</Label>
                        <Input
                        className="linetwo"
                        type="text"
                        onChange={(e) => {this.setState({linetwo: e.target.value })}}
                        value={this.state.linetwo}>
                        </Input>

                    <Label className="headerTxt">Line Three: 5 syllables</Label>
                        <Input
                        className="linethree"
                        type="text"
                        onChange={(e) => {this.setState({linethree: e.target.value })}}
                        value={this.state.linethree}>
                        </Input>

                    <Label className="headerTxt">Add an image to your poem (optional)</Label> 
                        <Input placeholder="enter search word here">
                        </Input>   

                    </FormGroup>   
                    <Button 
                    type="submit"
                    onClick={this.incrementAcorns}
                   >
                    Submit</Button>               
                </Form>
                </Card> 
                </Container> 
                </div>
            )
        }}
                
export default CreatePoetry;