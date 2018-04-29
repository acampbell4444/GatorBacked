import React, { Component } from 'react'
import { hashHistory } from 'react-router'

export default class RainHarvest extends Component {
  
  componentDidMount() {
    document.body.style.backgroundImage = "url('images/woodBackground.jpg')"
  	window.scrollTo(0, 0)
  }

  render() {
    return (
      <div id='pageContainer'>
      <div id='harvestCanvas'>
      <h1 id='theRainHarvestTitle'>RAIN HARVESTING</h1>

      
      

    <h3 id='rainHarvestText'>
      Protecting the water we drink and use should be a top concern in today's world.
      The amount of fresh usable
      <a href='http://water.usgs.gov/edu/waterquality.html'  target="_blank"> water </a>
      is around 30% of the total supply on earth. The more we pollute the smaller that number becomes.<br/><br/>
       Help to be a part of the solution by harvesting natural rain water.<br/><br/>
       Naturally harvested rain water is free because it uses gravity in the collection and the delivery process. This makes rain water a far better solution for watering plants lawns and gardens.
       <br/><br/> No chemicals added in the treatment of the water helps in greener plants and lawns. Gator Backed Solutions has a rain harvesting solution for any budget. From the rain barrel to landscaped ponds and wildlife refuges.
	     <br/><br/>

       <button className='btn btn-warning' id='didYouKnow'
         onClick={e => hashHistory.push('/boxOfRain')}>
        <p id='dykButtText'> Did You Know? </p>
       </button>
       </h3>
     </div>
       <img id='faceGatorRain' src='images/FaceGator.png'/>
       
    </div>
    )
   }
}
