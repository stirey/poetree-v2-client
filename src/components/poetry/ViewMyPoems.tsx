import React from 'react';
import { Form, Button, Container, Card, CardText,CardHeader, CardTitle,CardBody, Row, Col } from 'reactstrap';


type MyPoetryProps = {
    sessionToken?: any;
   
    
}

type MyPoetryStates = {
    myPoetryPosts: any;
    
}

class MyPoetry extends React.Component<MyPoetryProps, MyPoetryStates> {
   constructor(props: MyPoetryProps) {
       super(props)
       this.fetchMyPoetry = this.fetchMyPoetry.bind(this)
       this.state = {
           myPoetryPosts: [],
          
       }
   }

   setMyPoetryPosts = (postArray: any) => {
       console.log("postArray: ", postArray)
       this.setState({myPoetryPosts: postArray})
   }
   
   

   fetchMyPoetry = () => {
       console.log('fetch')
       //localstorage line is same as passing props
       fetch(`http://localhost:3000/poetry/mine/${localStorage.getItem('id')}`, {
           method: 'GET',
           headers: new Headers({
               'Content-Type': 'application/json',
               'Authorization': this.props.sessionToken
           })
       }).then((result) => result.json())
           .then((poetry) => {
               this.setMyPoetryPosts(poetry)
           }).catch((err) => console.log(err))
   }

   componentDidMount() {
       this.fetchMyPoetry();
   }


   render() {
       return (
           <div>
          <h1>Explore All Poetry</h1>
           {/* <Button href='/poetry/mine'>EXPLORE MINE</Button> */}
                  
                       <Container className="poemContainer" >
                           <Row>
                           {this.state.myPoetryPosts.length > 0 ? (this.state.myPoetryPosts.map((event: any, index: any) => (
                               <Col sm="4">
                               <Card  key={this.state.myPoetryPosts.id} className="poemCard"  >
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
                                   </CardBody>
                               </Card>
                               </Col>
                           ))
                           ) : (
                           <div></div>
                           )}
                           </Row>   
                       </Container>
                   </div>

       )
   }
}
                       
                   
export default MyPoetry;