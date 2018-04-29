import React, { Component } from 'react'

export default class BoxOfRain extends Component {

  render() {
    return (
      <div id='borCanvas'>
        <h3 id='dyk'><span id='highDyk'>Did You Know? </span><br/> <br/>
          Just 1 inch of rainfall on a 2,000 sq. ft. roof ...
        </h3>

      <div id='houseAndTrees'>
        <div className="tree one"></div>
        <div className="house"></div>
        <div className="tree two"></div>
        <div className="tree three"></div>
      </div>

      <h3 id='dyk2'>Is equal to: 
        1,250 Gallons of Water!
      </h3>

 
      
    <div className='flex-box'>
      <div className="cloud">
        <div className="puffs"></div>
        <div className="rain">
          <div className="drop"></div>
        <div className="drop"></div>
        <div className="drop"></div>
        <div className="drop"></div>
        <div className="drop"></div>
        </div>
      </div>
    </div>
      <div className='container'>

        <div className="bowl">
          <div className="inner">
            <div className="fill">
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" 
                   width="300px" height="300px" viewBox="0 0 300 300" 
                   enableBackground="new 0 0 300 300" xmlSpace="preserve">
                   <path className="waveShape" d="M300,300V2.5c0,0-0.6-0.1-1.1-0.1c0,0-25.5-2.3-40.5-2.4c-15,0-40.6,2.4-40.6,2.4
                   c-12.3,1.1-30.3,1.8-31.9,1.9c-2-0.1-19.7-0.8-32-1.9c0,0-25.8-2.3-40.8-2.4c-15,0-40.8,2.4-40.8,2.4c-12.3,1.1-30.4,1.8-32,1.9
                    c-2-0.1-20-0.8-32.2-1.9c0,0-3.1-0.3-8.1-0.7V300H300z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
     )
   }
}

      