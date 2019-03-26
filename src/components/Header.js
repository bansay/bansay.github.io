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
              <strong>Principal at Via Foci</strong>
            </Col>
          </Row>
        </Container>                  
      </header>
    );
  }
}

export default Header;
