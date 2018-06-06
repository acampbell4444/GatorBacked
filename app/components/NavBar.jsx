import React, { Component } from 'react'
import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Image } from 'react-bootstrap'
import { hashHistory } from 'react-router'

export default class NavBar extends Component {

  state = {toggleNav:false}

  render() {
  	const { currentRoute } = this.props
    return (
      <div>
	  <Navbar inverse collapseOnSelect fixedTop={true} expanded={this.state.toggleNav}
	  		  onToggle = {e => this.state.toggleNav ? this.setState({toggleNav: false}) : this.setState({toggleNav: true})}
	  >
	    <Navbar.Header>
		  <Navbar.Brand>
		   <div id='navBarLogo'>
			<NavItem eventKey={6} 
					 onClick={e => {
						hashHistory.push('home')
						this.setState({toggleNav: false})
					 }}

			>
				<Image src="images/earth_small.png" rounded responsive />
			</NavItem>
			</div>
		  </Navbar.Brand>
		  <Navbar.Toggle id='toggleNav' onClick={e => console.log('pushed')} 
		  				 ref='toggleDiv'

		  />
	    </Navbar.Header>
		<Navbar.Collapse>
		  <Nav>

		   <NavItem id={true ? 'navLinkTextfirst' : ''} eventKey={1} href="#" 
		   			onClick={e => hashHistory.push('home')} 
		   >
		      <span id={currentRoute === 'home' ? 'highlightLink' : ''}>
		        HOME
		      </span>
		   </NavItem>

		   <NavItem id='navLinkTextSecond' eventKey={2} href="#" 
		   			onClick={e => hashHistory.push('rainHarvest')} 
		   >
		   <span id={currentRoute === 'rainHarvest' ? 'highlightLink' : ''}>
		      RAIN HARVESTING
		   </span>
		   </NavItem>		   
		   
		   <NavItem id='navLinkText' eventKey={3} href="#"
		   			onClick={e => hashHistory.push('remodeling')}
		   >
		   <span id={currentRoute === 'remodeling' ? 'highlightLink' : ''}>
		      REMODELING
		   </span>
		   </NavItem>
		   <NavItem id='navLinkText' eventKey={4} href="#"
					onClick={e => hashHistory.push('landscaping')}
		   >
		   <span id={currentRoute === 'landscaping' ? 'highlightLink' : ''}>
		      LANDSCAPING
		   </span>
		   </NavItem>
{/*		   <NavItem id='navLinkText' eventKey={5} href="#"
		   			onClick={e => hashHistory.push('contact')}
		   >
		      CONTACT
		   </NavItem>*/}
		  </Nav>

	    </Navbar.Collapse>
	  </Navbar>
	  </div>
    )
  }
}

