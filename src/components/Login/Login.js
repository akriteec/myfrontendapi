import React from "react";
import MDBreact from "mdbreact";
import ReactDOM from 'react-dom'
import 'mdbreact/dist/css/mdb.css';
import './Login.css'

import { Container, Row, Col, Card, CardBody, Button, Label, Input, Icon, ModalFooter } from 'mdbreact';
import { Link, Redirect } from 'react-router-dom'
class Login extends React.Component{

constructor(){
  super()
  this.state = {

    email:'',
    password:'',
    color: "#000000"


  }
}

emailChangeHandler = (event) => {

  this.setState({email: event.target.value})


}

passwordChangeHandler = (event) => {

this.setState({password: event.target.value})
  
}

fromSubmitHnadler = (e) => {
  e.preventDefault()


// use API call to post the data 
//fetch byt default JS
// Axios external package


  console.log(this.state) // this sate js object
  // 1st url 
  // 2nd data JS object
  // 3rd header JS object 
var headers = {

'Content-Type':'application/json'

}
  Axios.post('http://localhost:3023/login', this.state , headers)
  .then(function(response){

  })
  .catch(function(err){

  })

}

render(){
if(this.state.redirect){

return (
  <Redirect to='/registration' />
  )
}
  
  return (
   

    <Container>
     
    <Row >
        <Col md="2" style={{marginRight:'800px',height:'500px', marginTop:'15px'}} >
        <img src= "./Image/s.jpg" />
        </Col>
    
        <Col md="5" style={{marginLeft:'-350px',marginTop:'15px'}} >
          <Card style={{marginTop:'-1px',height:'428px'}}>
            <CardBody className="mx-6">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong >Login</strong>
                </h3>
              </div>
              <Input 
                label="Your email"
                group
                type="email" name='email' id='email'
                validate
                error="wrong"
                success="right" value={this.state.email} onChange={this.emailChangeHandler} 
              />
              <Input
                label="Your password"
                group
                type="password" name='password' id='password'
                validate
                containerClass="mb-0"  value={this.state.password} onChange={this.passwordChangeHandler}
              />
              
              <div className="text-center mb-3">
                <Button
                  type="button"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                  onClick={this.handleSubmit}
                >
                   Login
                </Button>
              </div>
            </CardBody>
            <ModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                 <Link to='/' className="blue-text ml-1">Sign Up Here! </Link> 

               
                
              </p>
            </ModalFooter>
          </Card>
        </Col>
      </Row>
    </Container>
 
  )
}
}

export default Login;