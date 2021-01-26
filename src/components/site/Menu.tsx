import React from 'react';
import { Container, Row,  Col,  Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle  } from 'reactstrap';
import Tree from '../assets/tree.png';
import Forest from '../assets/forest.png';
import CreatePoetry from '../poetry/CreatePoetry';

class Menu extends React.Component {



    render() {
        return (

            <Row>
            <Col sm="2"></Col>
            <Col>
            <Card className="homeCard">
            <CardImg className="treeIcon" top width="100%" src={Tree} alt="Card image cap" />
            <CardBody>
            <CardTitle tag="h5">CREATE A POEM</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
            <CardText></CardText>
            <br/>
            <Button href='/poetry/create'>CREATE</Button> 
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
            <Button href='/poetry/'>EXPLORE</Button>
            </CardBody>
            </Card> 
            </Col>
            <Col sm="2"></Col>
            </Row>

        )
    }
}

export default Menu;