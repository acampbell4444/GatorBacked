import React, { Component } from 'react'

export default class Home extends Component {

  componentDidMount() {
  	document.body.style.backgroundImage = "url('images/woodBackground.jpg')"
  	window.scrollTo(0, 0)
  }

  render() {
    return (
      <div id='pageContainer'>
        <div id='harvestCanvas'>
          <h1 id='homeTitle'>SUSTAINABLE SOLUTIONS</h1>
	      <h3 id='remodelingText'>
			Serving Front Range Colorado.<br/> <br/>
			We have developed methods with conscious efforts made toward improving the way we impact the environment. 
			Approaching design opportunities with economic and environmental solutions that custom fit any project and any budget. 
			<br/><br/>
			We have made a decision to provide our customers with a sustainable, environmentally conscious method for rain harvesting, restoration/remodeling, and landscaping.
	        <br/><br/>
	        In order to remain sustainable, Gator Backed Solutions provides cost effective environmentally conscious options for its clients. 
	        Maintaining your property as a part of your effort in sustainability- increasing the life of your investments.
	        <br/><br/>
	         Be a part of the solution with Gator Backed Solutions.
	         Contact a Gator Backed Solutions consultant near you today.
	      </h3>
		<div className='cont'>
			<div id='dorkGuyVid'>
			
			    <video controls> 
			     <source src="images/dorkyGuy.mp4" />
			      <object data="video.swf" type="application/x-shockwave-flash" width="300" height="00"> 
			       <param name="quality" value="high" />
				   <param name="menu" value="false" />
			      </object>
			    </video>
			    <figcaption><i>Preparing For A Future</i></figcaption>
			    <div className='cont'>
                 <img id='faceGatorHome' src='images/FaceGator.png'/>
		        </div>
			
		    </div>
		 </div>
	    </div>
	  </div>
    )
   }
}

