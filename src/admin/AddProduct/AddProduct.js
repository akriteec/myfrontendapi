import React from "react";
import MDBreact from "mdbreact";
import ReactDOM from 'react-dom'
import 'mdbreact/dist/css/mdb.css';
import './addp.css'

import { Container, Row, Col, Card, CardBody, Button, Label, Input, Icon, ModalFooter,MDBContainer,MDBRow,MDBCol,MDBCard,MDBCardBody,MDBInput,MDBBtn } from 'mdbreact';
import { Link, Redirect } from 'react-router-dom'
class Login extends React.Component{

constructor(){
  super()
  this.state = {

    name:'',
    price:'',
    description:'',
    loggedIn:false,
    color: "#000000"


  }
}

nameChangeHandler = (event) => {

  this.setState({name: event.target.value})


}

priceChangeHandler = (event) => {

this.setState({price: event.target.value})
  
}

descriptionChangeHandler = (event) => {

this.setState({description: event.target.value})
  
}

ptypeChangeHandler = (event) => {

this.setState({productType: event.target.value})
  
}


fromSubmitHnadler = (e) => {
  e.preventDefault()


var headers = {

'Content-Type':'application/json'

}
var data = {
  name:this.state.name,
  price:this.state.price,
  description:this.state.description,

}
  Axios.post('http://localhost:3000/addProduct', this.state , headers)
  .then(function(response){

  })
  .catch(function(err){

  })

}

render(){
if(this.state.loggedIn){

return (
  <Redirect to='/adminlogin' />
  )
}
  
  return (
  <Container>
<div>
 <MDBContainer style={{
  paddingLeft:"20px"}}>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form onSubmit={this.formSubmitHandler} >
                <p className="h4 text-center py-4">ADD PRODUCT</p>
                <div className="grey-text">
                
                  <MDBInput 
                    label=" Product Name" value={this.state.name} onChange={this.nameChangeHandler}
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                  
                    label="Price" value={this.state.price} onChange={this.priceChangeHandler}
                    icon="home"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Description" value={this.state.description} onChange={this.descriptionChangeHandler}
                    icon="envolope"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                
                </div>
                <div className="text-center py-6 mt-6">
                 <MDBBtn
                  type="submit"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                 >
                  ADD PRODUCT
                </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    
      </div>
      </Container>
  );
}};

export default Login;