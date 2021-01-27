import React from 'react';
import { Form, Button, Container, Card, CardText,CardHeader, CardTitle,CardBody, Row, Col } from 'reactstrap';



 type ViewAllPoetryProps = {
     sessionToken?: any;
     
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

    setAllPoetryPosts = (postArray: any) => {
        console.log("postArray: ", postArray)
        this.setState({poetryPosts: postArray})
    }
    

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
           <h1>Explore All Poetry</h1>
            <Button href='/poetry/mine'>EXPLORE MINE</Button>
                   
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