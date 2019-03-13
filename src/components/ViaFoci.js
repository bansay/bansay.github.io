import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class ViaFoci extends Component {
  render() {
    return (
      <div className="viafoci content">
        <Container>
          <Row>
            <Col xs="12" sm="3">
              <h2>Via Foci</h2>
            </Col>
            <Col xs="12" sm="9">
              <p>"By Way of Multi Focus" &mdash; Via Foci means to take a passionate and multi-disciplinary approach to creative work. It enjoys the build, architecture, design, and functionality of persuasive information. By looking at objectives with a multi-dimensional perspective, Via Foci is motivated to bridge initial concepts into full-bloomed products.</p>
            </Col>            
          </Row>
        </Container>
        <hr />        
      </div>
    );
  }
}

export default ViaFoci;
