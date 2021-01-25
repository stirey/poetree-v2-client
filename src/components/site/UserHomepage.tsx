import React from 'react';
import { Container, Row, Button, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle  } from 'reactstrap';
import Tree from '../assets/tree.png'
import Forest from '../assets/forest.png';
import { fas } from '@fortawesome/free-solid-svg-icons';


type UserHomepageProps = {
    sessionToken: any;
    clearToken: any;
}

type UserHomeStates = {
    
}

class UserHomepage extends React.Component<UserHomepageProps, UserHomeStates> {
    constructor(props: UserHomepageProps) {
        super(props);
       
    }
    render() {
        return(
            <div>
                
                <Container>
                    <Row className="logoutBtnRow">
                        <Button className="logoutBtn" onClick={this.props.clearToken}>Logout</Button>
                    </Row>
                    <Row>
                        <Col sm="1"></Col>
                        <Col> 
                            <Card className="homeCard">
                            <CardImg className="treeIcon" top width="100%" src={Tree} alt="Card image cap" />
                            <CardBody>
                            <CardTitle tag="h5">CREATE A POEM</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
                            <CardText></CardText>
                            <Button>CREATE</Button>
                            </CardBody>
                            </Card>
                        </Col>

                        <Col> 
                            <Card className="homeCard">
                            <CardBody>
                            <CardTitle tag="h5">TEACHER ANNOUNCEMENT</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
                            <CardText></CardText>
                            <Button>CONNECT</Button>
                            </CardBody>
                            </Card>
                        </Col>

                        <Col> 
                            <Card className="homeCard">
                            <CardImg className="treeIcon" top width="100%" src={Forest} alt="Card image cap" />
                            <CardBody>
                            <CardTitle tag="h5">EXPLORE ALL POETRY</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
                            <CardText></CardText>
                            <Button>EXPLORE</Button>
                            </CardBody>
                            </Card>
                        </Col>
                        <Col sm="1"></Col>

                       
                    </Row>    
                </Container>
            </div>
        )
    }
}

export default UserHomepage;

// fontawesome tutorial for react
// https://www.youtube.com/watch?v=QZSxSjKmW_Y