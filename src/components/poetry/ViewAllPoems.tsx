import React from 'react';
import { Button, Container, Card, CardText, CardTitle,CardBody, Row, Col } from 'reactstrap';
import APIURL from '../../helpers/environment'



 type ViewAllPoetryProps = {
     sessionToken: string;
       
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
        fetch(`${APIURL}/poetry/`, {
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

    incrementLikes = (event: any) => {
        
        fetch(`${APIURL}/emoji/create/${event}`, {
            method: 'POST',
        
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': this.props.sessionToken
            })
        })
        .then((response) => response.json())
        .then((data) => this.fetchPoetry())
        
        .catch((err) => console.log(err))
    }

    
    componentDidMount() {
        this.fetchPoetry();
        
    }

    render() {
        return (
            <div>
                <Row className="allPoetryTitleRow">
           <h1 className="headerTxt">All Poetry</h1>
                </Row>   
                        <Container className="poemContainer" >
                            <Row>
                            {this.state.poetryPosts.length > 0 ? (this.state.poetryPosts.map((event: any, index: any) => (
                                <Col sm="4">
                                <Card  key={this.state.poetryPosts.id} className="poemCard"  >
                                    <CardBody className="headerTxt">
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

                                        <CardText>
                                          
                                        <Button 
                                        
                                        onClick={() => {this.incrementLikes(event.id)}} 
                                        type="button" 
                                        className="btn btn-danger btn-circle"><i className="fa fa-heart"></i>
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