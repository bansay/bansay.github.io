import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
//import TabContainer from './TabContainer';


class Skills extends Component {
  render() {
    return (
      <div className="skills content">
        <Container>
        	<Row>
        		<Col xs="12" sm="3">
        			<h2>Skills &amp; Tools</h2>
        		</Col>
            <Col xs="12" sm="9">
              <p>HTML5. CSS3. SCSS. JavaScript. ES6. PHP. MySQL. WordPress. SEO. CMS's. jQuery. ReactJS. Angular. Vue. AJAX. RESTful API's. JSX. Node.js. Git. Gitlab/Github. Bash. OSX. Server Administration. Webpack. Grunt. NPM. MailChimp. WCAG Compliancy. W3C Validation. User Experience. User Interface. Information Architecture. Sitemaps. Wireframes. Prototyping. Project Management. Project Scoping. Photoshop. Illustrator. Basecamp. Jira. Slack. Google Drive. PageSpeed Insights.</p>
            </Col>
          </Row>
        </Container>
        <hr />
      </div>
    );
  }
}

export default Skills;
