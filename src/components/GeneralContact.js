import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class GeneralContact extends Component {
  render() {
    return (
      <div className="general-contact content">
        <Container>
          <Row>
            <Col xs="12" sm="3">
              <h2>Contact</h2>
            </Col>
            <Col xs="12" sm="9">
              <p>I respond quickly to emails so feel free to reach out.</p>
              <a href="mailto:britt.ansay@gmail.com" target="_blank">britt.ansay@gmail.com</a>
            </Col>
          </Row>
        </Container>
        <hr />
      </div>
    );
  }
}

export default GeneralContact;
