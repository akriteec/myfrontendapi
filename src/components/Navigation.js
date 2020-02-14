import React, { Component } from 'react'
import { Button, Navbar, Nav, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { MDBCol, Row, Container, MDBContainer, MDBRow, MDBFooter,MDBNavbar, MDBNavbarBrand, MDBNavbarNav, Link,MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu,MDBFormInline, MDBDropdownItem, MDBIcon } from "mdbreact";
class Navigation extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isOpen: false
        }
    }

    handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('token');
        this.props.history.push('/')
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}
    render() {
  return (
      <MDBNavbar color="blue" dark expand="md">
        <MDBNavbarBrand style={{marginRight:'440px'}}>
          <strong className="white-text">GharKoGrocery</strong>
        </MDBNavbarBrand >
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink as={Link} to="/" active={true} >Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink as={Link} to="/about">About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink as={Link} to="/product">Product</MDBNavLink>
            </MDBNavItem>
             <MDBNavItem>
              <MDBNavLink as={Link} to="/feedback">Feedback</MDBNavLink>
            </MDBNavItem>
             <MDBNavItem>
              <MDBNavLink as={Link} to="/registration">Regsitration</MDBNavLink>
            </MDBNavItem>
             <MDBNavItem>
              <MDBNavLink as={Link} to="/login">Login</MDBNavLink>
            </MDBNavItem>

             <MDBNavItem>
              <MDBNavLink as={Link} to="/adminlogin">ADMIN</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
         
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default withRouter(Navigation)