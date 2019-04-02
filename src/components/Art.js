import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {imageAngelOfDeath, imageAntLife, imageBoxed, imageBreak, imageChange,
  imageCoSunset, imageContained, imageCowMountains, imageCupOfLife, imageCyddWest, imageElementaryPrinciples,
imageEmbraceChange, imageEthereal, imageEyeCreature, imageFashionista, imageFishSkies, imageFishBowl,
imageFollowYourHeart, imageGoodData, imageGloriousPurpleTree, imageGrow, imageHeavyHead, imageHeartStar,
imageHeavy, imageHula, imageJump, imageLetteredTrees, imageLightBox, imageMaskMan, imageModular, imageBuildMonster,
imageOrderChaos, imageOrganic, imagePhoenix, imagePolarClouds, imagePostHuman, imageReachLight, imageRest, imageRoadTrip,
imageRosePostHuman, imageBuildingSpace, imageTentacleCloud, imageRiverside, imageThing, imageThisThat, imageThisThat2, imageThought,
imageTough, imageTrajectories, imageTransition, imageViaFociTheme, imageHoldingSpace, imageYay, imageZebraMountains} from '../assets';

const arts = [
  {
    image : imageAngelOfDeath,
    title : "Angel of Death",
  },
  {
    image : imageAntLife,
    title : "Ant Life",
  },
  {
    image : imageBoxed,
    title : "Boxed",
  },
  {
    image : imageBreak,
    title : "Break",
  },
  {
    image : imageChange,
    title : "Change",
  },
  {
    image : imageCoSunset,
    title : "Colorado Sunset",
  },
  {
    image : imageContained,
    title : "Contained",
  },
  {
    image : imageCowMountains,
    title : "Cow Mountains",
  },
  {
    image : imageCupOfLife,
    title : "Cup of Life",
  },
  {
    image : imageCyddWest,
    title : "Cydd West, Portrait",
  },
  {
    image : imageElementaryPrinciples,
    title : "Elementary Principles",
  },
  {
    image : imageEmbraceChange,
    title : "Embrace",
  },
  {
    image : imageEthereal,
    title : "Ethereal",
  },
  {
    image : imageEyeCreature,
    title : "Eye Creature",
  },
  {
    image : imageFashionista,
    title : "Fashionista",
  },
  {
    image : imageFishSkies,
    title : "Fish Skies",
  },
  {
    image : imageFishBowl,
    title : "Fish Bowl",
  },
  {
    image : imageFollowYourHeart,
    title : "Follow Your Heart",
  },
  {
    image : imageGoodData,
    title : "Good Data",
  },
  {
    image : imageGloriousPurpleTree,
    title : "Glorious Purple Tree",
  },
  {
    image : imageGrow,
    title : "Grow",
  },
  {
    image : imageHeavyHead,
    title : "Heavy Head",
  },
  {
    image : imageHeartStar,
    title : "Heart Star CSS",
  },
  {
    image : imageHeavy,
    title : "Heavy",
  },
  {
    image : imageHula,
    title : "Hula",
  },
  {
    image : imageJump,
    title : "Jump",
  },
  {
    image : imageLetteredTrees,
    title : "Lettered Trees",
  },
  {
    image : imageLightBox,
    title : "Light Box",
  },
  {
    image : imageMaskMan,
    title : "Mask Man",
  },
  {
    image : imageModular,
    title : "Modular",
  },
  {
    image : imageBuildMonster,
    title : "Build a Monster",
  },
  {
    image : imageOrderChaos,
    title : "Order 'n Chaos",
  },
  {
    image : imageOrganic,
    title : "Organic",
  },
  {
    image : imagePhoenix,
    title : "Phoenix",
  },
  {
    image : imagePolarClouds,
    title : "Polar Bear Clouds",
  },
  {
    image : imagePostHuman,
    title : "Post-Human",
  },
  {
    image : imageReachLight,
    title : "Reach for the Light",
  },
  {
    image : imageRest,
    title : "Rest",
  },
  {
    image : imageRoadTrip,
    title : "Road Trip",
  },
  {
    image : imageRosePostHuman,
    title : "Rose the Post-Human",
  },
  {
    image : imageBuildingSpace,
    title : "Building Space",
  },
  {
    image : imageTentacleCloud,
    title : "Tentacle Cloud",
  },
  {
    image : imageRiverside,
    title : "The Riverside",
  },
  {
    image : imageThing,
    title : "Thing",
  },
  {
    image : imageThisThat,
    title : "This 'n That",
  },
  {
    image : imageThisThat2,
    title : "This 'n That, v2",
  },
  {
    image : imageThought,
    title : "Thought",
  },
  {
    image : imageTough,
    title : "Tough",
  },
  {
    image : imageTrajectories,
    title : "Trajectories",
  },
  {
    image : imageTransition,
    title : "Transition",
  },
  {
    image : imageViaFociTheme,
    title : "Via Foci Theme",
  },
  {
    image : imageHoldingSpace,
    title : "Holding Space",
  },
  {
    image : imageYay,
    title : "Yay",
  },
  {
    image : imageZebraMountains,
    title : "Zebra Mountains",
  },

];



class Art extends Component {
  render() {
    return (
      <div className="arts content">
        <Container>
        	<Row>
        		<Col xs="12" sm="3">
        			<h2>Featured Arts</h2>
        		</Col>
            <Col xs="12" sm="9">
              <ul>
                {
                  arts.map(art=>(
                    <li key={art.title}>
                      <img src={art.image} alt={art.title} />
                      <p>{art.title}</p>
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

export default Art;
