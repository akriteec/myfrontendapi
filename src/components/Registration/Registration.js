import React from 'react'
import MDBreact from "mdbreact";
import ReactDOM from 'react-dom'
import 'mdbreact/dist/css/mdb.css';
import "./Registration.css"

import { Container, Row, Col, Card, CardBody, Button, Label, Input, Icon, ModalFooter } from 'mdbreact';
import { Link, Redirect } from 'react-router-dom'
import Axios from 'axios';
class Registration extends React.Component {

constructor(){
  super()
  

  this.state = {
    fullname:'',
    address:'',
    phone:'',
    email:'',
    password:'',
    validationMessage:'',
     color: "#9ebd4b",
    redirect:false

  }
}

fullnameChangeHandler = (event) => {

this.setState({fullname: event.target.value})
  
}
addressChangeHandler = (event) => {

this.setState({address: event.target.value})
  
}
phoneChangeHandler = (event) => {

this.setState({phone: event.target.value})
  
}
emailChangeHandler = (event) => {

if(event.target.value.length < 6){
  this.setState({validationMessage:'Username Cannot be less than 6 chars '})
}

  this.setState({username: event.target.value})



}

passwordChangeHandler = (event) => {

this.setState({password: event.target.value})
  
}

formSubmitHandler = (e) => {
  e.preventDefault()


// use API call to post the data 
//fetch byt default JS
// Axios external package

var headers = {

'Content-Type':'application/json'
// not 'x-form-urlencded '

}

var data = {

  fullname:this.state.fullname,
  address:this.state.address,
  phone:this.state.phone,
  email:this.state.email,
  password:this.state.password

}

//mfetch method XMLHTTPREquest
  Axios.post('http://localhost:3023/registration', data , headers)

.then( (response) => {
  console.log(response.data.status);
  if(response.status === 201){

    this.setState({redirect:true})

    // redirect to login page 
  }



})
.catch( (err) =>  {

})



  // console.log(this.state)
}

render(){

//what to render based in state

if(this.state.redirect){

return (
  <Redirect to='/login' />
  )

// toast message

}



  return(
  <Container>
     
    <Row >
       {/* <Col md="2" style={{marginRight:'800px',height:'500px'}} >
        <img src= "./Image/s.jpg" />
        </Col>*/}
    
        <Col md="6" style={{marginRight:'100px'}} >
          <Card style={{marginTop:'opx'}}>
            <CardBody className="mx-6">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong >NEW ACCOUNT?</strong>
                  <h6>Create one for FREE here and become a Grocery member.</h6>
                </h3>
              </div>
               <Input 
                label="Fullname"
                group
                type="text" name='fullname' id='fullname'
                validate
                error="wrong"
                success="right" value={this.state.fullname} onChange={this.fullnameChangeHandler} 
              />
               <Input 
                label="Address"
                group
                type="text" name='address' id='address'
                validate
                error="wrong"
                success="right" value={this.state.address} onChange={this.addressChangeHandler} 
              />
               <Input 
                label="Phone Number"
                group
                type="number" name='phone' id='phone'
                validate
                error="wrong"
                success="right" value={this.state.phone} onChange={this.phoneChangeHandler} 
              />
              <Input 
                label="Email"
                group
                type="email" name='email' id='email'
                validate
                error="wrong"
                success="right" value={this.state.email} onChange={this.emailChangeHandler} 
              />
              <Input
                label="Password"
                group
                type="password" name='password' id='password'
                validate
                containerClass="mb-0"  value={this.state.password} onChange={this.passwordChangeHandler}
              />
              
              <div className="text-center mb-3">
                <Button
                  type="button"
                  gradient="dusty-grass"
                  rounded
                  className="btn-block z-depth-1a"
                  onClick={this.handleSubmit}
                  
                >
                  Register
                </Button>
              </div>
            </CardBody>
            <ModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Already a member?
                 <Link to='/' className="dusty-grass-text ml-1">Login Here! </Link> 

               
                
              </p>
            </ModalFooter>
          </Card>
        </Col>

        <Col md="2" style={{marginLeft:'-5px', marginTop:'50px'}} >
        <img src= "./Image/a.png" />
        </Col>
      </Row>
    </Container>
  )
}
}

export default Registration
