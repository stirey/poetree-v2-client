import React from 'react';
import { Container, Row, Col } from 'reactstrap';



class Banner extends React.Component {


    render() {
        return (
            <div className="bannertext">
                <Container >
                    <Row>
                    <Col md="4"></Col>
                    <Col md="4">
                        An app for writing, growth and connection.
                        
                    </Col>
                    <Col md="4"></Col>
                    </Row>
                </Container> 

            </div>
        )
    }
}

export default Banner;

