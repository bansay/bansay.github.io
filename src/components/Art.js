import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import imageAngelOfDeath from "../images/thumbnail/AngelOfDeath_bAnsay.jpg";
import imageAntLife from "../images/thumbnail/AntLife_bAnsay.png";
import imageBoxed from "../images/thumbnail/boxed_bAnsay.jpg";
import imageBreak from "../images/thumbnail/break_bAnsay.jpg";
import imageChange from "../images/thumbnail/change_bAnsay.jpg";
import imageCoSunset from "../images/thumbnail/co-sunset_bAnsay.png";
import imageContained from "../images/thumbnail/contained_bAnsay.jpg";
import imageCowMountains from "../images/thumbnail/cow-mountains-thumbnail_bAnsay.jpg";
import imageCupOfLife from "../images/thumbnail/Cup_bAnsay.jpg";
import imageCyddWest from "../images/thumbnail/Cydd-West_bAnsay.png";
import imageElementaryPrinciples from "../images/thumbnail/elementary_bAnsay.png";
import imageEmbraceChange from "../images/thumbnail/EmbraceChange_bAnsay.jpg";
import imageEthereal from "../images/thumbnail/Ethereal_bAnsay.jpg";
import imageEyeCreature from "../images/thumbnail/EyeCreature001_bAnsay.jpg";
import imageFashionista from "../images/thumbnail/fashion_bAnsay.jpg";
import imageFishSkies from "../images/thumbnail/fish-skies-01-thumb_bAnsay.jpg";
import imageFishBowl from "../images/thumbnail/fishbowl_bAnsay.png";
import imageFollowYourHeart from "../images/thumbnail/FollowYourHeart_bAnsay.jpg";
import imageGoodData from "../images/thumbnail/GettingGoodData_bAnsay.jpg";
import imageGloriousPurpleTree from "../images/thumbnail/gloriousPurpleTree_bAnsay.png";
import imageGrow from "../images/thumbnail/grow_bAnsay.jpg";
import imageHeavyHead from "../images/thumbnail/HeadHeavy_bAnsay.jpg";
import imageHeartStar from "../images/thumbnail/heart-star-css-thumb_bAnsay.jpg";
import imageHeavy from "../images/thumbnail/heavy_bAnsay.jpg";
import imageHula from "../images/thumbnail/hula_bAnsay.jpg";
import imageJump from "../images/thumbnail/jump_bAnsay.jpg";
import imageLetteredTrees from "../images/thumbnail/letter-trees-thumb_bAnsay.jpg";
import imageLightBox from "../images/thumbnail/lightbox_bAnsay.jpg";
import imageMaskMan from "../images/thumbnail/MaskMan_bAnsay.jpg";
import imageModular from "../images/thumbnail/modular_bAnsay.png";
import imageBuildMonster from "../images/thumbnail/Monster_bAnsay.png";
import imageOrderChaos from "../images/thumbnail/order-chaos-bAnsay.jpg";
import imageOrganic from "../images/thumbnail/organic_bAnsay.jpg";
import imagePhoenix from "../images/thumbnail/phoenix_bAnsay.jpg";
//import imagePickACard from "../images/thumbnail/PickaCard_bAnsay.jpg";
import imagePolarClouds from "../images/thumbnail/polar-clouds-thumbnail_bAnsay.jpg";
import imagePostHuman from "../images/thumbnail/postHuman_bAnsay.jpg";
import imageReachLight from "../images/thumbnail/ReachfortheLight_bAnsay.jpg";
import imageRest from "../images/thumbnail/rest_bAnsay.jpg";
import imageRoadTrip from "../images/thumbnail/Roadtrip_commPosts_bansay.jpg";
import imageRosePostHuman from "../images/thumbnail/Rose001_bAnsay.jpg";
import imageBuildingSpace from "../images/thumbnail/SpaceBuild_bAnsay.jpg";
import imageTentacleCloud from "../images/thumbnail/TentacleCloud_bAnsay.jpg";
import imageRiverside from "../images/thumbnail/TheRiversideDrawing_bAnsay.png";
import imageThing from "../images/thumbnail/thing_bAnsay.jpg";
import imageThisThat from "../images/thumbnail/ThisThat_bAnsay.jpg";
import imageThisThat2 from "../images/thumbnail/ThisThat002_bAnsay.jpg";
import imageThought from "../images/thumbnail/thought01_bAnsay.jpg";
import imageTough from "../images/thumbnail/Tough_bAnsay.jpg";
import imageTrajectories from "../images/thumbnail/Trajectories_bAnsay.jpg";
import imageTransition from "../images/thumbnail/transition_bAnsay.jpg";
import imageViaFociTheme from "../images/thumbnail/ViaFociTheme_bAnsay.png";
import imageHoldingSpace from "../images/thumbnail/Winc_Circle_bAnsay.png";
import imageYay from "../images/thumbnail/yay_bAnsay.jpg";
import imageZebraMountains from "../images/thumbnail/zebra-mountains-bAnsay.png";

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







