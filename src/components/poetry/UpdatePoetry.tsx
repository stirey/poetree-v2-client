import React from 'react';
import { Redirect } from "react-router-dom";
import {Button, Modal, ModalHeader, ModalBody, Row, Input, Label, Form, FormGroup} from 'reactstrap';
import APIURL from '../../helpers/environment'


// props always come from other files
type UpdatePoetryProps = {
    sessionToken: any;
    //with the () it says it is a function and the any is the return type. If we have no return, we could put the word void there...any, number, string....
    fetchPoetry: () => any;
    closeModal: () => void;
    eventId: number;

}
// state is a variable local to the file I am working in
type UpdatePoetryState = {
    
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
    modal: boolean,
    // setQ1: (e: any) => void;
    // setQ2: (e: any) => void;
    // setQ3: (e: any) => void;
    // setRed: (e: any) => void;
    // setOrange: (e: any) => void;
    // setYellow: (e: any) => void;
    // setGreen: (e: any) => void;
    // setBlue: (e: any) => void;
    // setPurple: (e: any) => void;
    // setPink: (e: any) => void;
    // setBlack: (e: any) => void;
    // setBrown: (e: any) => void;
    // setGray: (e: any) => void;
    // setWhite: (e: any) => void;
    setPoemTitle: (e: any) => void;
    setLineOne: (e: any) => void;
    setLineTwo: (e: any) => void;
    setLineThree: (e: any) => void;
    
}



class UpdatePoetry extends React.Component<UpdatePoetryProps, UpdatePoetryState> {
constructor(props: UpdatePoetryProps) {
        super(props)
        this.state={
            modal: false,
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
            
            // setQ1: (e) => {
            //     this.setState({
            //         question1: e
            //     })
            // },
            // setQ2: (e) => {
            //     this.setState({
            //         question2: e
            //     })
            // },
            // setQ3: (e) => {
            //     this.setState({
            //         question3: e
            //     })
            // },
            // setRed: (e) => {
            //     this.setState({
            //         red: e
            //     })
            // },
            // setOrange: (e) => {
            //     this.setState({
            //         orange: e
            //     })
            // },
            // setYellow: (e) => {
            //     this.setState({
            //         yellow: e
            //     })
            // },
            // setGreen: (e) => {
            //     this.setState({
            //         green: e
            //     })
            // },
            // setBlue: (e) => {
            //     this.setState({
            //         blue: e
            //     })
            // },
            // setPurple: (e) => {
            //     this.setState({
            //         purple: e
            //     })
            // },
            // setPink: (e) => {
            //     this.setState({
            //         pink: e
            //     })
            // },
            // setBlack: (e) => {
            //     this.setState({
            //         black: e
            //     })
            // },
            // setBrown: (e) => {
            //     this.setState({
            //         brown: e
            //     })
            // },
            // setGray: (e) => {
            //     this.setState({
            //         gray: e
            //     })
            // },
            // setWhite: (e) => {
            //     this.setState({
            //         white: e
            //     })
            // },
            setPoemTitle: (e) => {
                this.setState({
                    poemtitle: e
                })
            },
            setLineOne: (e) => {
                this.setState({
                    lineone: e
                })
            },
            setLineTwo: (e) => {
                this.setState({
                    linetwo: e
                })
            },
            setLineThree: (e) => {
                this.setState({
                    linethree: e
                })
            },
        }         
    }
// toggle between open and close modal. the default state of open modal is true, there the toggle will change it to false !openModal
// toggle = () => setOpenModal(!openModal);
// this is what changes everything on the backend
        handleSubmit = (event: any) => {
            event.preventDefault();
            fetch(`${APIURL}/poetry/update/${this.props.eventId}`, {
                method: 'PUT',
                body: JSON.stringify({
                    poetry: {
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
            }).then((response) => {
                if (response.status === 200) {
                    console.log("Poetry updated!");
                    console.log(response);
                } else {
                    console.log("Poetry update not successful.")
                } 
                return response.json();
            }).then((data) => {
                console.log(data);
                this.props.closeModal();
                 // this refreshes the website
                this.props.fetchPoetry();
            })
        };
               
        componentDidMount() {
            if (!this.props.sessionToken) {
                return <Redirect to="/userhomepage" />
            } else {
                return <Redirect to="/userhomepage" />
            }
        }    

            
    render() {
        return(
            <div>
                <Modal isOpen={true}>
                <ModalHeader>Edit Poem</ModalHeader>
                <ModalBody>
                    <Form>
                    {/* <FormGroup> */}
                    {/* <Label>Question 1</Label>
                        <Input
                        className="question1"
                        type="textarea"                     
                        onChange={(e) => { this.state.setQ1(e.target.value)}}
                        value={this.state.question1}
                        // onChange={(e) => {this.setState({question1: e.target.value })}}
                        >
                        </Input>
                    </FormGroup>
                    <FormGroup>
                    <Label>Question 2</Label>
                        <Input
                        className="question2"
                        type="textarea"
                        onChange={(e) => { this.state.setQ2(e.target.value)}}
                        // onChange={(e) => {this.setState({question2: e.target.value })}}
                        value={this.state.question2}>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                    <Label>Question 3</Label>
                        <Input
                        className="question3"
                        type="textarea"
                        onChange={(e) => { this.state.setQ3(e.target.value)}}
                        // onChange={(e) => {this.setState({question3: e.target.value })}}
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
                               red: !this.state.red 
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
                               orange: !this.state.orange
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
                               yellow: !this.state.yellow 
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
                               green: !this.state.green 
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
                               blue: !this.state.blue
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
                               purple: !this.state.purple 
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
                               pink: !this.state.pink 
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
                               black: !this.state.black
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
                               brown:!this.state.brown 
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
                               gray: !this.state.gray 
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
                               white: !this.state.white 
                            })
                        }}
                        ></Input>
                        </Col>           
                    </Row> */}
                    <FormGroup>
                    <Label>Poem Title</Label>
                        <Input
                    
                        className="poemtitle"
                        type="text"
                        onChange={(e) => {this.setState({poemtitle: e.target.value })}}
                        value={this.state.poemtitle}>
                        </Input>

                    <Label>Line 1</Label>
                        <Input
                        className="lineone"
                        type="text"
                        onChange={(e) => {this.setState({lineone: e.target.value })}}
                        value={this.state.lineone}>
                        </Input>
                    
                    <Label>Line 2</Label>
                        <Input
                        className="linetwo"
                        type="text"
                        onChange={(e) => {this.setState({linetwo: e.target.value })}}
                        value={this.state.linetwo}>
                        </Input>

                    <Label>Line 3</Label>
                        <Input
                        className="linethree"
                        type="text"
                        onChange={(e) => {this.setState({linethree: e.target.value })}}
                        value={this.state.linethree}>
                        </Input>

                    </FormGroup>   
                    <Button type="submit" id="submitBtn" onClick={this.handleSubmit}>Update</Button>

                    <Button type="button" id="cancelBtn" onClick={this.props.closeModal}>Cancel</Button> 
                    {/* <Button type="submit" onClick={!this.handleSubmit}>Cancel</Button>              */}
                </Form>                  
                </ModalBody>
           </Modal>

            <Button type="submit" href='/poetry/update'>
            Edit Poetry
            </Button>
            </div>
        
        )}
    }


export default UpdatePoetry;

//try this to fix the modal
// openModal = ()=> {
// this.setState({openModal: true})}
// closeModal = () => {
// this.setState({openModal:false})
// }

// type boolean

//then make a button to close modal like this
//<Button onClick={this.closeModal>
// Close
// </Button>
//The Modal is called up in ViewRequestPost where it is rendering EditRequestPost.