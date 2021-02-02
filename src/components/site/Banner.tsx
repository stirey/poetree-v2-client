import React from 'react';
import { Container, Row, Col } from 'reactstrap';



class Banner extends React.Component {


    render() {
        return (
            <div className="bannertext">
                <Container >
                    <Row>
                    <Col md="2"></Col>
                    <Col md="8">
                        <h4 className="bannerTxt"> An app for writing, growth and connection.</h4>
                       
                        
                    </Col>
                    <Col md="2"></Col>
                    </Row>
                </Container> 

            </div>
        )
    }
}

export default Banner;

