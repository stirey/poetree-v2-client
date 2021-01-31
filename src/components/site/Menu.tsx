import React from 'react';
import { Container, Row,  Col,  Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle  } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';
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
                <Row className ="my-auto"> 
                <CardImg className="treeIcon" top width="100%" src={Tree} alt="Card image cap" />
                </Row>
           
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
            <CardText>Hello Students! I hope you had a great weekend! This weeks poetry challenge is SCIENCE. Create a post related to keywords we learned last week related to the lifecycle of a butterfly.</CardText>
            <Button>CONNECT</Button>
            </CardBody>
            </Card>
            </Col>

            <Col>
            <Card className="homeCard">
            <Row className ="my-auto"> 
            <CardImg className="treeIcon" top width="100%" src={Forest} alt="Card image cap" />
            </Row>
            <CardBody>
            <CardTitle tag="h5">EXPLORE ALL POETRY</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
            <CardText></CardText>
    
            <Button href='/poetry/mine'>EXPLORE MINE</Button> 

            <Button href='/poetry/'>EXPLORE ALL</Button> 
            </CardBody>
            </Card> 
            </Col>
            <Col sm="2"></Col>
            </Row>

        )
    }
}

export default Menu;