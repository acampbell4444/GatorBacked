import React, { Component } from 'react'

export default class Contact extends Component {
  
  componentDidMount() {
    document.body.style.backgroundImage = "url('images/woodBackground.jpg')"
  	window.scrollTo(0, 0)
  }

  render() {
    return (
      <div id='pageContainer'>
      <div id='harvestCanvas'>
      <h1 id='rainHarvestTitle'>CONTACT</h1>
      <h3 id='contactText'>Under Construction</h3>
		<div>
    <img id='faceGatorHome' src='images/FaceGator.png'/>

		</div>
	  </div>
	  </div>
    )
   }
}
