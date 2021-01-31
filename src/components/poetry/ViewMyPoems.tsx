import React from 'react';
import { Button, Container, Card, CardText, CardTitle,CardBody, Row, Col, Modal } from 'reactstrap';

import UpdatePoetry from '../poetry/UpdatePoetry';



type MyPoetryProps = {
    // the ? is saying it is optional 
    sessionToken: any;
   
}

type MyPoetryStates = {
    myPoetryPosts: any;  
    modal: boolean;
    openModal: boolean;
    // id: number;
    
}

class MyPoetry extends React.Component<MyPoetryProps, MyPoetryStates> {
   constructor(props: MyPoetryProps) {
       super(props)
       
       this.state = {
           myPoetryPosts: [], 
           modal: false,
           openModal: false,
        //    id: 0,
               
       };
      this.fetchMyPoetry = this.fetchMyPoetry.bind(this); 
   }

    componentDidMount() {
        this.fetchMyPoetry();
    }

   setMyPoetryPosts = (postArray: any) => {
       console.log("postArray: ", postArray)
       this.setState({myPoetryPosts: postArray})
   }
   
   

   fetchMyPoetry = () => {
       console.log('fetch')
       //localstorage line is same as passing props. The name 'id' is set in App.tsx localStorage.setItem('id', userId);
       fetch(`http://localhost:3000/poetry/mine/${localStorage.getItem('id')}`, {
           method: 'GET',
           headers: new Headers({
               'Content-Type': 'application/json',
               'Authorization': this.props.sessionToken
           })
       }).then((result) => result.json())
           .then((data) => {
               this.setMyPoetryPosts(data)
           })
        }
// arguments an params can be called seperate things
        deletePoem = (event: any) => {
            // event refers to the id of the poem
            console.log(event)
            fetch(`http://localhost:3000/poetry/delete/${event}`, {
                method: 'DELETE',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    'Authorization': this.props.sessionToken
                })
            })
            .then(response => response.json());
            console.log('Poem was deleted.');
            this.fetchMyPoetry();
        }

        openModal = () => {
            this.setState({ openModal: true })
        }

        closeModal = () => {
            this.setState({ openModal: false })
        }

   render() {
       return (
           <div>
          <h1>My Poetry</h1>
                  <div>     
                           {this.state.myPoetryPosts.length > 0 ? (this.state.myPoetryPosts.map((event: any, index: any) => (
                            <Container key={this.state.myPoetryPosts.id} className="poemContainer" >
                               <Card className="poemCard"  >
                                   <CardBody>
                                       <CardTitle tag="h4">
                                   {this.state.myPoetryPosts[index].poemtitle}
                                       </CardTitle>
                                            <CardText>
                                            {this.state.myPoetryPosts[index].lineone}
                                            </CardText>
                                            <CardText>
                                            {this.state.myPoetryPosts[index].linetwo}
                                            </CardText>
                                            <CardText>
                                        {this.state.myPoetryPosts[index].linethree}
                                            </CardText>
                                        <Row>
                                            <Col>
                                            
                                            <Button
                                            type="button"
                                            className="updateBtn"
                                            onClick={this.openModal}>
                                                Edit
                                            </Button>
                                            
                                            <Button 
                                            type="button" 
                                            className="deletePoem"
                                            //event is holding onto the values, targets the exact poem, this reps the id of the poem we want to delete (event: id)
                                            onClick={() => {this.deletePoem(event.id)}}>
                                            Delete
                                            </Button>
                                            
                                            </Col>
                                        </Row>  
                                   </CardBody>
                               </Card>                          
                            <Modal isOpen={this.state.openModal}>
                                 <UpdatePoetry 
                                       eventId={event.id}
                                       sessionToken={this.props.sessionToken}
                                       closeModal={this.closeModal} 
                                       fetchPoetry={this.fetchMyPoetry}
                                        />
                            </Modal>
                        </Container>
                           ))
                           ) : (
                               <div>
                        </div>
                           )}
                           </div>
                    </div>
       )}}
                           
                      
export default MyPoetry;