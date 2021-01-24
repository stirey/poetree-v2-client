import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Button
  } from 'reactstrap';



  type HeaderProps ={
    clearToken: any;
  }

class Header extends React.Component<HeaderProps, {}> {
  constructor(props: HeaderProps) {
    super(props)
    
  }


    render() {
    return (
<div>
    <Navbar color="light" light expand="md">
        <NavbarText>PoeTree</NavbarText>
        
            <NavbarToggler />
              <Collapse  navbar>
                <Nav className="mr-auto" navbar>
                  
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

                  <NavItem>
          
                    <Button onClick={this.props.clearToken}>Logout</Button>
                  </NavItem>
                
                </Nav>
            </Collapse>
    </Navbar>
</div>
    )}
}

export default Header;
