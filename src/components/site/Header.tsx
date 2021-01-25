import React from 'react';
import {Collapse,Navbar,NavbarToggler,Nav,NavItem,NavLink,UncontrolledDropdown, DropdownToggle,DropdownMenu,DropdownItem,NavbarText,} from 'reactstrap';


type HeaderState = {
    isOpen: boolean;
  }

class Header extends React.Component<{}, HeaderState> {
  constructor(props: any) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
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
      <Navbar color="light" light expand="md">
            <NavbarText>PoeTree</NavbarText>
            <NavbarToggler right onClick={this.toggle} />
              <Collapse  isOpen={this.state.isOpen} navbar>
                <Nav navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  
                  <NavItem>
                    <NavLink href="/contact" className="contact">Contact</NavLink>
                  </NavItem>
                  
                  <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>About</DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem href="/theapp" className="theapp">The App</DropdownItem>
                        <DropdownItem href='/themaker' className="themaker" >The Maker</DropdownItem>
                        <DropdownItem href='/forteachers' className="forteachers">Teacher Resources</DropdownItem>
                        <DropdownItem href='/artsintegration'className="artsintegration">Arts Integration</DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                
                </Nav>
            </Collapse>
    </Navbar>
</div>
    )}
}

export default Header;
