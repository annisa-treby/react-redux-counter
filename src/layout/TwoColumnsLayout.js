import React from "react";
import {Card, Col, Container, Row} from "reactstrap";
import Sidebar from './Sidebar'
import Routes from '../routes/Routes'
import {BrowserRouter as Router} from "react-router-dom";


function TwoColumnsLayout() {

        return(
            <Container>
                <Router>
                <Row>
                    <Col sm={2}>
                        <Card>
                            <Sidebar/>
                        </Card>
                    </Col>
                    <Col sm={10}>
                        <Card>
                            <Routes/>
                        </Card>
                    </Col>
                </Row>
                </Router>
            </Container>
        )

}

export default TwoColumnsLayout;