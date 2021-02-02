import React from 'react';
import { Container, Row, Col } from 'reactstrap';



class Footer extends React.Component {

    render() {
        return(
        <div className="footerDiv">
             <footer className="footer">   
            <Container className="footer">
                <Row className="footerRow">
                <Col md="4"></Col>
                <Col md="4" >
                 <h5 className="footerTxt">© Copyright 2020 PoeTree</h5>   
                </Col>
                <Col md="4"></Col>             
                </Row>                          
            </Container>
           </footer> 
        </div>
        )
    }
}

export default Footer;