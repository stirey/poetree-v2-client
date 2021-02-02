import React from 'react';
import { Row,  Col,  Button, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle  } from 'reactstrap';

import Tree from '../assets/tree.png';
import Forest from '../assets/forest.png';


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
            <CardTitle className="menuTitles" tag="h3">CREATE A POEM</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
            <CardText></CardText>
            <br/>
            <Button href='/poetry/create'>CREATE</Button> 
            </CardBody>
            </Card>
            </Col>

            <Col>
            <Card >
            <CardBody>
            <CardTitle className="homeCard" tag="h4">TEACHER ANNOUNCEMENT</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
            <CardText>Hello Students! I hope you had a great weekend! This weeks poetry challenge is SCIENCE. Create a post related to keywords we learned last week related to the lifecycle of a butterfly.</CardText>
            
            </CardBody>
            </Card>
            </Col>

            <Col>
            <Card className="homeCard">
            <Row className ="my-auto"> 
            <CardImg className="treeIcon" top width="100%" src={Forest} alt="Card image cap" />
            </Row>
            <CardBody>
            <CardTitle tag="h3">EXPLORE POETRY</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
            <CardText></CardText>
            <br/>
            <Button className="myPoetrybtn" href='/poetry/mine'>MINE</Button> 

            <Button className="allPoetrybtn" href='/poetry/'>ALL</Button> 
            </CardBody>
            </Card> 
            </Col>
            <Col sm="2"></Col>
            </Row>

        )
    }
}

export default Menu;