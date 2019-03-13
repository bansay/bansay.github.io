import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class Logo extends Component {
  render() {
    return (
      <div className="skills content">
        <Container>
        	<Row>
        		<Col xs="12" sm="3">
        			<h2>Logo / Icon</h2>             
        		</Col>
            <Col xs="12" sm="9">
              <p>Half heart, half star. It represents a bond between steered direction and inherent decision. A harmony between the will and the way. It's always genuine, always real. Subliminal and ethereal, blood and sweat. It's our pulse, motivation, and it's written in the cosmos.</p>
            </Col>
          </Row>
        </Container>
        <hr />            
      </div>
    );
  }
}

export default Logo;
