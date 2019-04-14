import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Modal from './Modal';
import {imageAngelOfDeath, imageAntLife, imageBoxed, imageBreak, imageChange,
  imageCoSunset, imageContained, imageCowMountains, imageCupOfLife, imageCyddWest, imageElementaryPrinciples,
imageEmbraceChange, imageEthereal, imageEyeCreature, imageFashionista, imageFishSkies, imageFishBowl,
imageFollowYourHeart, imageGoodData, imageGloriousPurpleTree, imageGrow, imageHeavyHead, imageHeartStar,
imageHeavy, imageHula, imageJump, imageLetteredTrees, imageLightBox, imageMaskMan, imageModular, imageBuildMonster,
imageOrderChaos, imageOrganic, imagePhoenix, imagePolarClouds, imagePostHuman, imageReachLight, imageRest, imageRoadTrip,
imageRosePostHuman, imageBuildingSpace, imageTentacleCloud, imageRiverside, imageThing, imageThisThat, imageThisThat2, imageThought,
imageTough, imageTrajectories, imageTransition, imageViaFociTheme, imageHoldingSpace, imageYay, imageZebraMountains,
imagefullAngelOfDeath, imagefullAntLife, imagefullboxed0, imagefullboxed1, imagefullBreak, imagefullChange1,
imagefullChange2, imagefullChange3, imagefullColoSunset, imagefullContained, imagefullCowMountains, imagefullCupOfLife,
imageCyddWest1, imageCyddWest2, imageCyddWest3, imageCyddWest4, imageCyddWest5, imageCyddWest6, imageCyddWest7,
imageCyddWest8, imageCyddWest9, imageCyddWest10, imageCyddWest11, imagefullElementary1, imagefullElementary2,
imagefullElementary3, imagefullElementary4, imagefullEmbraceChange, imagefullEthereal, imagefullEyeCreature, imagefullFashionista,
imagefullFishSkies1, imagefullFishSkies2, imagefullFishBowl, imagefullFollowHeart, imagefullGoodData1, imagefullGoodData2,
imagefullGoodData3, imagefullPurpleTree, imagefullGrow1, imagefullGrow2, imagefullGrow3, imagefullHeavyHead,
imagefullHeavy, imagefullHula, imagefullJump, imagefullMaskMan, imagefullModular, imageOrderChaosInfinite,
imagefullOrganic1, imagefullOrganic2, imagefullOrganic3, imagefullPhoenix, imagefullPolarBearClouds,
imagefullPostHumanSketch, imagefullReachForLight, imagefullRest, imagefullRoadTrip1, imagefullRose1,
imagefullSpaceBuild, imagefullTentacleCloud, imagefullThing1, imagefullThing2, imagefullThing3, imagefullThing4,
imagefullThing5, imagefullThisthatBW, imagefullThisthatColor, imagefullThought1, imagefullThought2,
imagefullTough, imagefullTrajectories, imagefullTransition, imagefullHoldingSpace1, imagefullHoldingSpace2,
imagefullHoldingSpace3, imagefullHoldingSpace4, imagefullHoldingSpace5, imagefullHoldingSpace6, imagefullHoldingSpace7,
imagefullHoldingSpace8, imagefullHoldingSpace9, imagefullHoldingSpace10, imagefullYay, imagefullZebraMountains,     } from '../assets';

const arts = [
  {
    thumbnail : imageAngelOfDeath,
    title : "Angel of Death",
    fulls : [imagefullAngelOfDeath]
  },
  {
    thumbnail : imageAntLife,
    title : "Ant Life",
    fulls : [imagefullAntLife]
  },
  {
    thumbnail : imageBoxed,
    title : "Boxed",
    fulls : [imagefullboxed0, imagefullboxed1]
  },
  {
    thumbnail : imageBreak,
    title : "Break",
    fulls : [imagefullBreak]
  },
  {
    thumbnail : imageChange,
    title : "Change",
    fulls : [imagefullChange1, imagefullChange2, imagefullChange3]
  },
  {
    thumbnail : imageCoSunset,
    title : "Colorado Sunset",
    fulls : [imagefullColoSunset]
  },
  {
    thumbnail : imageContained,
    title : "Contained",
    fulls : [imagefullContained]
  },
  {
    thumbnail : imageCowMountains,
    title : "Cow Mountains",
    fulls : [imagefullCowMountains]
  },
  {
    thumbnail : imageCupOfLife,
    title : "Cup of Life",
    fulls : [imagefullCupOfLife]
  },
  {
    thumbnail : imageCyddWest,
    title : "Cydd West, Portrait",
    fulls : [imageCyddWest1, imageCyddWest2, imageCyddWest3, imageCyddWest4, imageCyddWest5, imageCyddWest6, imageCyddWest7, imageCyddWest8, imageCyddWest9, imageCyddWest10, imageCyddWest11]
  },
  {
    thumbnail : imageElementaryPrinciples,
    title : "Elementary Principles",
    fulls : [imagefullElementary1, imagefullElementary2, imagefullElementary3, imagefullElementary4]
  },
  {
    thumbnail : imageEmbraceChange,
    title : "Embrace",
    fulls : [imagefullEmbraceChange]
  },
  {
    thumbnail : imageEthereal,
    title : "Ethereal",
    fulls : [imagefullEthereal]
  },
  {
    thumbnail : imageEyeCreature,
    title : "Eye Creature",
    fulls : [imagefullEyeCreature]
  },
  {
    thumbnail : imageFashionista,
    title : "Fashionista",
    fulls : [imagefullFashionista]
  },
  {
    thumbnail : imageFishSkies,
    title : "Fish Skies",
    fulls : [imagefullFishSkies1, imagefullFishSkies2]
  },
  {
    thumbnail : imageFishBowl,
    title : "Fish Bowl",
    fulls : [imagefullFishBowl]
  },
  {
    thumbnail : imageFollowYourHeart,
    title : "Follow Your Heart",
    fulls : [imagefullFollowHeart]
  },
  {
    thumbnail : imageGoodData,
    title : "Good Data",
    fulls : [imagefullGoodData1, imagefullGoodData2, imagefullGoodData3]
  },
  {
    thumbnail : imageGloriousPurpleTree,
    title : "Glorious Purple Tree",
    fulls : [imagefullPurpleTree]
  },
  {
    thumbnail : imageGrow,
    title : "Grow",
    fulls : [imagefullGrow1, imagefullGrow2, imagefullGrow3]
  },
  {
    thumbnail : imageHeavyHead,
    title : "Heavy Head",
    fulls : [imagefullHeavyHead]
  },
  // {
  //   thumbnail : imageHeartStar,
  //   title : "Heart Star CSS",
  //   fulls : []
  // },
  {
    thumbnail : imageHeavy,
    title : "Heavy",
    fulls : [imagefullHeavy]
  },
  {
    thumbnail : imageHula,
    title : "Hula",
    fulls : [imagefullHula]
  },
  {
    thumbnail : imageJump,
    title : "Jump",
    fulls : [imagefullJump]
  },
  // {
  //   thumbnail : imageLetteredTrees,
  //   title : "Lettered Trees",
  //   fulls : []
  // },
  // {
  //   thumbnail : imageLightBox,
  //   title : "Light Box",
  //   fulls : []
  // },
  {
    thumbnail : imageMaskMan,
    title : "Mask Man",
    fulls : [imagefullMaskMan]
  },
  {
    thumbnail : imageModular,
    title : "Modular",
    fulls : [imagefullModular]
  },
  // {
  //   thumbnail : imageBuildMonster,
  //   title : "Build a Monster",
  //   fulls : []
  // },
  {
    thumbnail : imageOrderChaos,
    title : "Order 'n Chaos",
    fulls : [imageOrderChaosInfinite]
  },
  {
    thumbnail : imageOrganic,
    title : "Organic",
    fulls : [imagefullOrganic1, imagefullOrganic2, imagefullOrganic3]
  },
  {
    thumbnail : imagePhoenix,
    title : "Phoenix",
    fulls : [imagefullPhoenix]
  },
  {
    thumbnail : imagePolarClouds,
    title : "Polar Bear Clouds",
    fulls : [imagefullPolarBearClouds]
  },
  {
    thumbnail : imagePostHuman,
    title : "Post-Human",
    fulls : [imagefullPostHumanSketch]
  },
  {
    thumbnail : imageReachLight,
    title : "Reach for the Light",
    fulls : [imagefullReachForLight]
  },
  {
    thumbnail : imageRest,
    title : "Rest",
    fulls : [imagefullRest]
  },
  {
    thumbnail : imageRoadTrip,
    title : "Road Trip",
    fulls : [imagefullRoadTrip1]
  },
  {
    thumbnail : imageRosePostHuman,
    title : "Rose the Post-Human",
    fulls : [imagefullRose1]
  },
  {
    thumbnail : imageBuildingSpace,
    title : "Building Space",
    fulls : [imagefullSpaceBuild]
  },
  {
    thumbnail : imageTentacleCloud,
    title : "Tentacle Cloud",
    fulls : [imagefullTentacleCloud]
  },
  // {
  //   thumbnail : imageRiverside,
  //   title : "The Riverside",
  //   fulls : []
  // },
  {
    thumbnail : imageThing,
    title : "Thing",
    fulls : [imagefullThing1, imagefullThing2, imagefullThing3, imagefullThing4, imagefullThing5]
  },
  {
    thumbnail : imageThisThat,
    title : "This 'n That",
    fulls : [imagefullThisthatBW]
  },
  {
    thumbnail : imageThisThat2,
    title : "This 'n That, v2",
    fulls : [imagefullThisthatColor]
  },
  {
    thumbnail : imageThought,
    title : "Thought",
    fulls : [imagefullThought1, imagefullThought2]
  },
  {
    thumbnail : imageTough,
    title : "Tough",
    fulls : [imagefullTough]
  },
  {
    thumbnail : imageTrajectories,
    title : "Trajectories",
    fulls : [imagefullTrajectories]
  },
  {
    thumbnail : imageTransition,
    title : "Transition",
    fulls : [imagefullTransition]
  },
  // {
  //   thumbnail : imageViaFociTheme,
  //   title : "Via Foci Theme",
  //   fulls : []
  // },
  {
    thumbnail : imageHoldingSpace,
    title : "Holding Space",
    fulls : [imagefullHoldingSpace1, imagefullHoldingSpace2, imagefullHoldingSpace3, imagefullHoldingSpace4, imagefullHoldingSpace5, imagefullHoldingSpace6, imagefullHoldingSpace7, imagefullHoldingSpace8, imagefullHoldingSpace9, imagefullHoldingSpace10]
  },
  {
    thumbnail : imageYay,
    title : "Yay",
    fulls : [imagefullYay]
  },
  {
    thumbnail : imageZebraMountains,
    title : "Zebra Mountains",
    fulls : [imagefullZebraMountains]
  },

];



class Art extends Component {

  state = {
    show: false,
    openModalIndex : -1
  }

  showModal = (index) => {
    this.setState({
      show: true,
      openModalIndex : index
    });
  }

  hideModal = () => {
    this.setState({
      show: false,
      openModalIndex : null
    });
  }

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
                  arts.map((art, index)=>{
                    return(
                    <li key={art.title}>
                      <button onClick={() => this.showModal(index)} className="art-item">
                        <img src={art.thumbnail} alt={art.title} />
                        <p>{art.title}</p>
                      </button>
                      <Modal show={this.state.openModalIndex} index={index} handleClose={this.hideModal} gallery={art}>
                        <h3>{art.title}</h3>
                        {art.fulls.map((full, index) => {
                          return(
                            <img key={index} src={full} alt={art.title} className="figure" />
                          )
                        })}
                      </Modal>
                    </li>
                    )
                  })
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
