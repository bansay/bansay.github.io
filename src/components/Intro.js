import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class Intro extends Component {
  render() {
    return (
      <div className="intro content">
        <Container>
          <Row>
            <Col xs="12" sm="3">
              <h2>Hello World</h2>
            </Col>
            <Col xs="12" sm="9">
              <p>Brittany Ansay is a full-stack web developer based in Colorado. She has been writing code professionally since 2012. With an artist background, her attention to detail is of stellar nature when it comes to the world wide web. She's a fanatic about the "Internet of Things" and enjoys working on products that create social impact.</p>
            </Col>
          </Row>
        </Container>
        <hr />
      </div>
    );
  }
}

export default Intro;
