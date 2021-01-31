import React from 'react';
import { Form, Button, Container, Card, CardText,CardHeader, CardTitle,CardBody, Row, Col } from 'reactstrap';


// import AddEmoji from '../emoji/AddEmoji';
import { Route } from 'react-router-dom';

 type ViewAllPoetryProps = {
     sessionToken?: any;
     incrementMe: number;
     setIncrementMe: (e: number) => any;
     like: number;   
 }

 type ViewAllPoetryStates = {
    poetryPosts: any;
   
 }

class ViewAllPoems extends React.Component<ViewAllPoetryProps, ViewAllPoetryStates> {
    constructor(props: ViewAllPoetryProps) {
        super(props)
        this.fetchPoetry = this.fetchPoetry.bind(this)
        this.state = {
            poetryPosts: [],
          
        }
    }
// postArray 
    setAllPoetryPosts = (postArray: any) => {
        console.log("postArray: ", postArray)
        this.setState({poetryPosts: postArray})
    }
    // need to set state for each poem to be incremented so it doesn't increment all poems
    // Notes: I can't pass props to a parent. It can only be passed down to children.
  

    fetchPoetry = () => {
        fetch(`http://localhost:3000/poetry/`, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        }).then((result) => result.json())
            .then((poetry) => {
                this.setAllPoetryPosts(poetry)
                
            })
    }

    
    componentDidMount() {
        this.fetchPoetry();
        
    }

    render() {
        return (
            <div>
           <h1>All Poetry</h1>
                   
                        <Container className="poemContainer" >
                            <Row>
                            {this.state.poetryPosts.length > 0 ? (this.state.poetryPosts.map((event: any, index: any) => (
                                <Col sm="4">
                                <Card  key={this.state.poetryPosts.id} className="poemCard"  >
                                    <CardBody>
                                        <CardTitle tag="h4">
                                    {this.state.poetryPosts[index].poemtitle}
                                        </CardTitle>
                                        <CardText>
                                    {this.state.poetryPosts[index].lineone}
                                        </CardText>
                                        <CardText>
                                    {this.state.poetryPosts[index].linetwo}
                                        </CardText>
                                        <CardText>
                                    {this.state.poetryPosts[index].linethree}
                                        </CardText>
{/* think about how to weave in the index to the button click */}
                                        {/* <Button onClick={(e) => this.props.incrementMe}> Likes: {this.props.heart} </Button> */}

                                      
                                        
                                        <CardText>
                                        <Button type="button" className="btn btn-danger btn-circle"><i className="fa fa-heart"></i>
                                        </Button>
                                        {this.state.poetryPosts[index].like}
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
                        
                    
export default ViewAllPoems;



// RESOURCES
//https://reactjs.org/docs/hooks-state.html#equivalent-class-example