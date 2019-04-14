import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import logo from '../images/logo-viafoci.png'

class Header extends Component {
  render() {
    return (
      <header>
        <Container>
        	<Row>
        		<Col xs="12" sm="3">
        			<img src={logo} alt="Via Foci" width="100px" />
        		</Col>
            <Col xs="12" sm="9">
              <h1>Brittany Ansay</h1>
              <strong>Full-Stack Web Developer. </strong>
              <span>Principal at Via Foci</span>              
            </Col>
          </Row>
        </Container>
      </header>
    );
  }
}

export default Header;
