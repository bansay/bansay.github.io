import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import WorkItems from './WorkItems';

const workItems = [
  {
    name : "Frasier Meadows",
    url : "https://www.frasiermeadows.org/",
    activeState : true,
    agency : "Vermilion",
    year: "2018",
    notes: "Full-Stack, WordPress Website Redesign"
  },
  {
    name : "University Center for Atmospheric Research (UCAR)",
    url : "https://ncar.ucar.edu/",
    activeState : true,
    agency : "Vermilion",
    year: "2018",
    notes: "Frontend Only"
  },
  {
    name : "National Center for Atmospheric Research (NCAR)",
    url : "https://ncar.ucar.edu/",
    activeState : true,
    agency : "Vermilion",
    year: "2018",
    notes: "Frontend Only"
  },
  {
    name : "Achievement First",
    url : "https://www.achievementfirst.org/",
    activeState : true,
    agency : "Vermilion",
    year: "2018",
    notes: "Full-Stack, WordPress Website Redesign"
  },
  {
    name : "Beforeplay",
    url : "https://beforeplay.org/",
    activeState : true,
    agency : "Vermilion",
    year: "2018",
    notes: "Web Maintenance"
  },
  {
    name : "Mott Foundation",
    url : "https://mott.org/",
    activeState : true,
    agency : "Vermilion",
    year: "2017",
    notes: "Web Maintenance"
  },
  {
    name : "Rose Community Foundation",
    url : "https://rcfdenver.org/",
    activeState : true,
    agency : "Vermilion",
    year: "2017",
    notes: "Full-Stack, WordPress Website Redesign"
  },
  {
    name : "Boulder Shelter for the Homeless",
    url : "https://bouldershelter.org/",
    activeState : true,
    agency : "Vermilion",
    year: "2017",
    notes: "Full-Stack, WordPress Website Redesign"
  },
  {
    name : "Cain Travel",
    url : "https://caintravel.com",
    activeState : true,
    agency : "Vermilion",
    year: "2017",
    notes: "Full-Stack, WordPress Website Redesign"
  },
  {
    name : "Milbank Memorial Foundation",
    url : "https://milbank.org",
    activeState : true,
    agency : "Vermilion",
    year: "2017",
    notes: "Web Maintenance"
  },
  {
    name : "Connecticut Health Foundation",
    url : "https://cthealth.org",
    activeState : true,
    agency : "Vermilion",
    year: "2017",
    notes: "Web Maintenance"
  },
  {
    name : "Coaching Corps",
    url : "https://www.coachingcorps.org/",
    activeState : true,
    agency : "Vermilion",
    year: "2016",
    notes: "Full-Stack, WordPress Website Redesign"
  },
  {
    name : "BVSD - Health and Physical Education",
    url : "http://www.bvsdhealthandpe.com/",
    activeState : true,
    agency : "Vermilion",
    year: "2016",
    notes: "Full-Stack, WordPress Website Redesign"
  },
  {
    name : "Campaign for Action (CCNA)",
    url : "http://www.campaignforaction.org",
    activeState : true,
    agency : "Vermilion",
    year: "2016",
    notes: "Full-Stack, WordPress Website Redesign"
  },
  {
    name : "UNM Foundation",
    url : "https://www.unmfund.org/",
    activeState : true,
    agency : "Vermilion",
    year: "2016",
    notes: "Full-Stack, WordPress Website Redesign"
  },
  {
    name : "Financial Planning Standards Board (FPSB)",
    url : "http://www.fpsb.org",
    activeState : true,
    agency : "Vermilion",
    year: "2016",
    notes: "Full-Stack, WordPress Website Redesign"
  },
  {
    name : "Fire Adapted Communities Learning Network",
    url : "http://www.fireadaptednetwork.org/",
    activeState : true,
    agency : "Vermilion",
    year: "2015",
    notes: "Full-Stack, WordPress Website Redesign"
  },
  {
    name : "Naturally Boulder",
    url : "http://www.naturallyboulder.org/",
    activeState : true,
    agency : "Vermilion",
    year: "2015",
    notes: "Full-Stack, WordPress Website Redesign"
  },
  {
    name : "Stacey Steers Studio",
    url : "http://staceysteers.com/",
    activeState : true,
    agency : "Vermilion",
    year: "2015",
    notes: "Full-Stack, WordPress Website Redesign"
  },
  {
    name : "Love Vail",
    url : "http://www.lovevail.org/",
    activeState : true,
    agency : "Vermilion",
    year: "2015",
    notes: "Full-Stack, WordPress Website Redesign"
  },
  {
    name : "University of Colorado, Continuing Education",
    url : "http://ce.colorado.edu",
    activeState : true,
    agency : "Vermilion",
    year: "2015",
    notes: "Full-Stack, WordPress Website Redesign"
  },
  {
    name : "Eco-cycle Solutions Hub",
    url : "http://ecocyclesolutionshub.org",
    activeState : true,
    agency : "Vermilion",
    year: "2015",
    notes: "Full-Stack, WordPress Website Redesign"
  },
  {
    name : "National Runaway Safeline (NRS)",
    url : "http://www.1800runaway.org/",
    activeState : true,
    agency : "Vermilion",
    year: "2015",
    notes: "Full-Stack, WordPress Website Redesign"
  },
  {
    name : "Reading Partners",
    url : "http://readingpartners.org/",
    activeState : true,
    agency : "Vermilion",
    year: "2015",
    notes: "Full-Stack, WordPress Website Redesign"
  },
  {
    name : "Denver's Early Childhood Council",
    url : "http://denverearlychildhood.org/",
    activeState : true,
    agency : "Vermilion",
    year: "2015",
    notes: "Full-Stack, WordPress Website Redesign"
  },
  {
    name : "Rudi's Bakery Gluten-Free Camp Scholarship Giveaway",
    url : "#",
    activeState : false,
    agency : "Vermilion",
    year: "2015",
    notes: "Facebook App"
  },
  {
    name : "Communikey",
    url : "http://cmky.org/",
    activeState : true,
    agency : "Via Foci",
    year: "2015",
    notes: "Full-Stack, WordPress Website Redesign"
  },
  {
    name : "BVSD - Success Effect",
    url : "http://bvsdsuccesseffect.org/",
    activeState : true,
    agency : "Vermilion",
    year: "2015",
    notes: "Full-Stack, WordPress Website Redesign"
  },
  {
    name : "Beforeplay Prime Time Sex Quiz",
    url : "https://www.facebook.com/beforeplay/app_190322544333196",
    activeState : true,
    agency : "Vermilion",
    year: "2015",
    notes: "Facebook App"
  },
  {
    name : "Yes on 2B: Keep the Safety Net",
    url : "#",
    activeState : false,
    agency : "Vermilion",
    year: "2014",
    notes: "Frontend Only"
  },
  {
    name : "Yes on 1A: Keep the Safety Net",
    url : "#",
    activeState : false,
    agency : "Vermilion",
    year: "2014",
    notes: "Frontend Only"
  },
  {
    name : "Scytus",
    url : "http://scytus.com/",
    activeState : true,
    agency : "Vermilion",
    year: "2014",
    notes: "Frontend Only"
  },
  {
    name : "CDR Associates",
    url : "#",
    activeState : false,
    agency : "Vermilion",
    year: "2014",
    notes: "Web Maintenance"
  },
  {
    name : "Rudi's Bakery",
    url : "http://www.rudisbakery.com/",
    activeState : false,
    agency : "Vermilion",
    year: "2014",
    notes: "Web Maintenance"
  },
  {
    name : "Tendril",
    url : "#",
    activeState : false,
    agency : "Vermilion",
    year: "2014",
    notes: "Web Maintenance"
  },
  {
    name : "Rudi's Bakery Ciabatta Promo",
    url : "#",
    activeState : false,
    agency : "Vermilion",
    year: "2014",
    notes: "Facebook App"
  },
  {
    name : "Rudi's Bakery Sandwich Quiz, Which Sandwich Are You?",
    url : "#",
    activeState : false,
    agency : "Vermilion",
    year: "2014",
    notes: "Facebook App"
  },
  {
    name : "Rudi's Bakery Sunday Bunday Promo",
    url : "#",
    activeState : false,
    agency : "Vermilion",
    year: "2014",
    notes: "Facebook App"
  },
  {
    name : "Opower: BEE Potential Microsite (Oracle)",
    url : "#",
    activeState : false,
    agency : "Vermilion",
    year: "2014",
    notes: "Web App"
  },
  {
    name : "Opower: BDR Potential Microsite (Oracle)",
    url : "#",
    activeState : false,
    agency : "Vermilion",
    year: "2014",
    notes: "Web App"
  },
  {
    name : "Pledge 1 Percent",
    url : "#",
    activeState : false,
    agency : "Vermilion",
    year: "2014",
    notes: "Frontend Only"
  },
  {
    name : "Women in Community",
    url : "http://www.womenincommunity.com/",
    activeState : true,
    agency : "Via Foci",
    year: "2014",
    notes: "Full-Stack, WordPress Website Redesign"
  },
  {
    name : "College Press Club",
    url : "#",
    activeState : false,
    agency : "Via Foci",
    year: "2014",
    notes: "Web Maintenance"
  },
  {
    name : "Loveland Products",
    url : "https://www.lovelandproducts.com/",
    activeState : true,
    agency : "SpireMedia",
    year: "2013",
    notes: "Frontend, Drupal Theme"
  },
  {
    name : "Next Generation Learning Challenges",
    url : "#",
    activeState : false,
    agency : "SpireMedia",
    year: "2013",
    notes: "Frontend, Drupal Theme"
  },
  {
    name : "Paqui Tequila",
    url : "#",
    activeState : false,
    agency : "SpireMedia",
    year: "2013",
    notes: "Full-Stack, WordPress Website Redesign"
  },
  {
    name : "Vectra Bank",
    url : "https://www.vectrabank.com/",
    activeState : true,
    agency : "SpireMedia",
    year: "2013",
    notes: "Frontend Only"
  },
  {
    name : "Orange Grove Gallery",
    url : "http://orangegrovegallery.com/",
    activeState : true,
    agency : "Via Foci",
    year: "2013",
    notes: "Full-Stack, WordPress Website Redesign"
  },
  {
    name : "In-State Angels",
    url : "#",
    activeState : false,
    agency : "Via Foci",
    year: "2013",
    notes: "Full-Stack, WordPress Website Redesign"
  },
  {
    name : "PlanetEcosystems",
    url : "#",
    activeState : false,
    agency : "Via Foci",
    year: "2013",
    notes: "Full-Stack, WordPress Website Redesign"
  },
];



class WorkPortfolio extends React.Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isShowing : false
    }
  }

  handleClick() {
    this.setState({isShowing : true});
  }

  render() {
    const isShowing = this.state.isShowing;
    let button;

    if (isShowing) {
      button = "";
    } else {
      button = <Button onClick={this.handleClick}>Show Complete List of Past Work</Button>;
    }

    return (
      <div className="work content">
        <Container>
          <Row>
            <Col xs="12" sm="3">
              <h2>Work Portfolio</h2>
            </Col>
            <Col xs="12" sm="9">
            <p>The majority of past work includes building custom WordPress themes and plugins. In recent projects, Brittany has turned her attention to mastering JavaScript and using various tools including ReactJS and Redux.</p>
            <p>In the list of work below, a line-through indicates the project is no longer active.</p>
            {button}
            <WorkPortfolioCheck isShowing={isShowing} />
            </Col>
          </Row>
        </Container>
        <hr />
      </div>
    );
  }
}

function WorkPortfolioCheck(props) {
  const isShowing = props.isShowing;
  if (isShowing) {
    return (<WorkItems workPortfolioItems={workItems} />);
  } else {
    return null;
  }
}



export default WorkPortfolio;
