
import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';


import {
    BrowserRouter as Router,
    Switch,
    Link, // ahref equiv
    Route,
     // to catch the cliked route

} from 'react-router-dom'
import {

 Container,Row,Col,Card, Form, FormControl, Button, Carousel

} from 'react-bootstrap'
import { MDBCol, MDBContainer, MDBRow, MDBFooter,MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import Regsitration from './components/Registration/Registration'
import Login from './components/Login/Login'
import Feedback from './components/Feedback/Feedback'
import Home from './components/Home/Home'
import About from './components/About/About'
import Product from './components/Product/Product'
import Cart from './components/Cart/Cart'
import UserProfile from './components/UserProfile/UserProfile'
import UpdateProduct from './admin/AddProduct/UpdateProduct'
import Adminlogin from './admin/Login/Login'
import AddProduct from './admin/AddProduct/AddProduct'
import EditProduct from './admin/AddProduct/EditProduct'
import ViewUser from './admin/ViewUser/ViewUser'
import ViewFeedback from './admin/ViewFeedback/ViewFeedback'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Dashboard from './admin/Dashboard/Dashboard'
import Buy from './components/Buy/Buy'
import Order from './components/order'
class Index extends React.Component {

    constructor() {

        super()
        this.state={
          color: "#ffffff"

        }
    }
     render() {
         return (
           
                
                 <Router>

   

 <Switch>
		<Route exact path="/">
                  < Home/>
                  </Route>
                  <Route exact path="/about">
                  < About/>
		  </Route>

      <Route exact path="/">
                  < Home/>
                  </Route>
                 

        	 <Route exact path="/feedback">
                  < Feedback/>
                  </Route>

                  <Route exact path="/registration">
                  < Regsitration/>
                  </Route>

		<Route exact path="/login">
                  < Login/>
                  </Route>
                    <Route exact path="/product">
                  < Product/>
                  </Route>
                   <Route exact path="/cart">
                  < Cart/>
                  </Route>
	<Route exact path="/adminlogin">
                  < Adminlogin/>
                  </Route>
                  <Route exact path="/addproduct" >
                  < AddProduct/>
                  </Route>

                   <Route exact path="/viewuser">
                  < ViewUser/>
      </Route>
       <Route exact path="/viewfeedback">
                  < ViewFeedback/>
      </Route>

        <Route exact path="/editproduct">
                  < EditProduct/>
      </Route>

       <Route exact path="/userprofile">
                  < UserProfile/>
      </Route>
       <Route exact path="/updateproduct/my/:id" component={UpdateProduct}/>
        <Route exact path="/buy/my/:id" component={Buy}/>

        <Route exact path="/navigation">
                  < Navigation/>
      </Route>
       <Route exact path="/dashboard">
                  < Dashboard/>
      </Route>
      <Route exact path="/footer">
                  < Footer/>
      </Route>
       <Route exact path="/order">
                  < Order/>
      </Route>

                </Switch>
      
                </Router>

        )
    }

}

ReactDOM.render(<Index />, document.getElementById('root'))

