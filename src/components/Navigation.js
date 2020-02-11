import React, { Component } from 'react'
import { Button, Navbar, Nav, NavbarBrand, NavbarToggler, Collapse, NavItem, NavLink } from 'reactstrap'
import { withRouter } from 'react-router-dom'
import { MDBCol, Row, Container, MDBContainer, MDBRow, MDBFooter,MDBNavbar, MDBNavbarBrand, MDBNavbarNav, Link,MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
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

toggleCollapse = collapseID => () => {
  this.setState(prevState => ({
    collapseID: prevState.collapseID !== collapseID ? collapseID : ""
  }));
}
    render() {
        return (
      
  
            <div> {/* for wrapping jsx components or use Fragment <> </> */}
                
               
                <Container>
                <Row style={{marginTop:'10px'}}>
                <div>
<MDBNavbar color="blue-gradient" dark expand="md" >
        <MDBNavbarBrand style={{marginRight:'460px'}}>
          <strong className="white-text">GharkoGrocery</strong>
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
            </MDBNavItem>
          </MDBNavbarNav>

        </MDBCollapse>
       
         <MDBNavbarToggler tag="button" className="aqua-gradient" onClick={this.toggleCollapse('navbarCollapse14')}>
              <span className="white-text">
                <img src="./Image/bars.png" style={{width:"20px", height:"20px"}} />
              </span>
            </MDBNavbarToggler>

            <MDBCollapse id="navbarCollapse14" isOpen={this.state.collapseID} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBNavLink as={Link} to="/adminlogin">AdminLogin</MDBNavLink>
                </MDBNavItem>
               
              </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
 



            
                </div>

                </Row>

                </Container>
                </div>
         

        )
    }

}

export default withRouter(Navigation)