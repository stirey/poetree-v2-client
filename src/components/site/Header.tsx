import React from 'react';
import {Collapse,Navbar,NavbarToggler,Nav,NavItem,NavLink,UncontrolledDropdown, DropdownToggle,DropdownMenu,DropdownItem,NavbarText, Media } from 'reactstrap';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../site/Homepage';
import Tree from '../../components/assets/treeLogo_30px.png';



type HeaderState = {
    isOpen: boolean;
    theapp: boolean;
    contact: boolean;
    themaker: boolean;
    forteachers: boolean;
    artsintegration: boolean;
  }

class Header extends React.Component<{}, HeaderState> {
  constructor(props: any) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      theapp: false,
      contact: true,
      themaker: false,
      forteachers: false,
      artsintegration: false,
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

    render() {
    return (
    <div>

      <Route>
        <HomePage />
      </Route>
      <Navbar color="light" light expand="md">
         
         <Media className=".navlogo" src={Tree} /> 
            <NavbarText className="poetreeText">
              PoeTree</NavbarText>
          
            <NavbarToggler right onClick={this.toggle} />
              <Collapse  isOpen={this.state.isOpen} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink className="headerTxt" href="/">Home</NavLink>
                  </NavItem>
                  
                  <NavItem>
                    <Route>
                    <NavLink href="/contact" onClick={(e) => this.state.contact} className="headerTxt" >Contact</NavLink>
                    </Route>
                  </NavItem>
                  
                  <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle className="headerTxt" nav caret>About</DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem href="/theapp" className="headerTxt">The App</DropdownItem>
                        <DropdownItem href='/themaker' className="headerTxt" >The Maker</DropdownItem>
                        <DropdownItem href='/forteachers' className="headerTxt">Teacher Resources</DropdownItem>
                        <DropdownItem href='/artsintegration'className="headerTxt">Arts Integration</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                
                </Nav>
            </Collapse>
    </Navbar>
</div>
    )}
}

export default Header;
