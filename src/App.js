import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { Container, Row, Col, Button } from 'reactstrap';
import Header from './components/Header';
import Home from './screens/Home';
import Projects from './screens/Projects';
import Artwork from './screens/Artwork';
import Contact from './screens/Contact';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
      <Router>
        <Container>
          <Row>
            <Col xs="12" sm={{size: 9, offset: 3}}>
              <nav className="container">
              <ul>
                <li>
                  <NavLink exact to="/"><Button outline color="secondary">Home</Button></NavLink>
                </li>
                <li>
                  <NavLink to="/projects/"><Button outline color="secondary">Web Projects</Button></NavLink>
                </li>
                <li>
                  <NavLink to="/artwork/"><Button outline color="secondary">Artwork</Button></NavLink>
                </li>
                <li>
                  <NavLink to="/contact/"><Button outline color="secondary">Contact</Button></NavLink>
                </li>
              </ul>
              </nav>
            </Col>
          </Row>
        </Container>
        <hr />

        <Route path="/" exact component={Home} />
        <Route path="/projects/" component={Projects} />
        <Route path="/artwork/" component={Artwork} />
        <Route path="/contact/" component={Contact} />

      </Router>
      </div>
    );
  }
}

export default App;
