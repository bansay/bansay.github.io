import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
library.add(fab);

const socials = [
  {
    href : "https://www.instagram.com/brittansay/",
    title : "Instagram",
    icon : ['fab', 'instagram']
  },
  {
    href : "https://ello.co/britt",
    title : "Ello",
    icon : ['fab', 'ello']
  },
  {
    href : "https://www.linkedin.com/in/bansay",
    title : "LinkedIn",
    icon : ['fab', 'linkedin']
  },
  {
    href : "https://twitter.com/brittansay",
    title : "Twitter",
    icon : ['fab', 'twitter']
  },
  {
    href : "https://github.com/bansay",
    title : "Github",
    icon : ['fab', 'github']
  },
  {
    href : "https://soundcloud.com/bansay",
    title : "Soundcloud",
    icon : ['fab', 'soundcloud']
  },
];

class Network extends Component {
  render() {
    return (
      <div className="network content">
        <Container>
        	<Row>
        		<Col xs="12" sm="3">
        			<h2>Social</h2>
        		</Col>
            <Col xs="12" sm="9">
              <p>Find me in other places on the web:</p>
              <ul>
                {
                  socials.map(social=>(
                    <li key={social.title}>
                      <a href={social.href}>
                          <FontAwesomeIcon icon={social.icon} />
                      </a>
                    </li>
                  ))
                }
              </ul>
            </Col>
          </Row>
        </Container>
        <hr />
      </div>
    );
  }
}

export default Network;
