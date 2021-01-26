import React from 'react'
import { Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Container, Form, FormGroup, Input  } from 'reactstrap';
import Tree from '../assets/tree.png'
import { Redirect } from 'react-router-dom';



// class CreatePoetry extends React.Component {


//     render() {
//         return (
//             <div>
            
//             <h1>create poetry component</h1>
//             </div>
//         )
//     }
// }

type CreatePoetryProps = {
    sessionToken?: any;
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
    setQuestion1: (e: any) => any;
    setQuestion2: (e: any) => any;
    setQuestion3: (e: any) => any;
    setRed: (e: any) => any;
    setOrange: (e: any) => any;
    setYellow: (e: any) => any;
    setGreen: (e: any) => any;
    setBlue: (e: any) => any;
    setPurple: (e: any) => any;
    setBlack: (e: any) => any;
    setGray: (e: any) => any;
    setWhite: (e: any) => any;
    setPoemTitle: (e: any) => any;
    setLineOne: (e: any) => any;
    setLineTwo: (e: any) => any;
    setLineThree: (e: any) => any;
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
    selectedOption: boolean;

}

class CreatePoetry extends React.Component< CreatePoetryProps, CreatePoetryStates> {
    constructor(props: CreatePoetryProps) {
        super(props)
        this.state = {
            question1: "",
            question2: "",
            question3: "",
            red: true,
            orange: true,
            yellow: true,
            green: true,
            blue: true,
            purple: true,
            black: true,
            gray: true,
            white: true,
            poemtitle: "",
            lineone: "",
            linetwo: "",
            linethree: "", 
            selectedOption: true
        };        
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        fetch(`http://localhost:3000/poetry/create`, {
            method: 'POST',
            body: JSON.stringify({
                poetry: {
                    question1: this.props.question1,
                    question2: this.props.question2,
                    question3: this.props.question3,
                    red: this.props.red,
                    orange: this.props.orange,
                    yellow: this.props.yellow,
                    green: this.props.green,
                    blue: this.props.blue,
                    purple: this.props.purple,
                    black: this.props.black,
                    gray: this.props.gray,
                    white: this.props.white,
                    poemtitle: this.props.poemtitle,
                    lineone: this.props.lineone,
                    linetwo: this.props.linetwo,
                    linethree: this.props.linethree,
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
                this.props.setQuestion1('');
                this.props.setQuestion2('');
                this.props.setQuestion3('');
                this.props.setRed('');
                this.props.setOrange('');
                this.props.setYellow('');
                this.props.setGreen('');
                this.props.setBlue('');
                this.props.setPurple('');
                this.props.setBlack('');
                this.props.setGray('');
                this.props.setWhite('');
                this.props.setPoemTitle('');
                this.props.setLineOne('');
                this.props.setLineTwo('');
                this.props.setLineThree('');

            })
        }
        render() {
            return (
                <div>
                <Container>   
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
                        type="radio"
                        checked={this.props.red}
                        onChange={() => setRed(!this.props.red)}
                        
                        ></Input>
                   
                        <Input
                        type="radio"
                        name="color"
                        value= "orange"
                        checked={this.state.orange === true}
                        onChange={this.onValueChange}
                        ></Input>
                    
                        <Input
                        type="radio"
                        name="color"
                        value="yellow"
                        checked={this.state.yellow === true}
                        onChange={this.onValueChange}
                        ></Input>
                    
                        <Input
                        type="radio"
                        name="color"
                        value="green"
                        checked={this.state.green === true}
                        onChange={this.onValueChange}
                        ></Input>

                        <Input
                        type="radio"
                        name="color"
                        value="blue"
                        checked={this.state.blue === true}
                        onChange={this.onValueChange}
                        ></Input>

                        <Input
                        type="radio"
                        name="color"
                        value="purple"
                        checked={this.state.purple === true}
                        onChange={this.onValueChange}
                        ></Input>

                        <Input
                        type="radio"
                        value="black"
                        checked={this.state.black === true}
                        onChange={this.onValueChange}
                        ></Input>

                        <Input
                        type="radio"
                        name="color"
                        value="gray"
                        checked={this.state.gray === true}
                        onChange={this.onValueChange}
                        ></Input> 

                        <Input
                        type="radio"
                        name="color"
                        value="white"
                        checked={this.state.white === true}
                        onChange={this.onValueChange}
                        ></Input>           
                    </FormGroup>

                   
                </Form>


                </Container> 
                </div>
            )
        }
                
 

export default CreatePoetry;