import React from "react";
import MDBreact from "mdbreact";
import ReactDOM from 'react-dom'
import 'mdbreact/dist/css/mdb.css';
import './addp.css'

import { Container, Row, Col, Card, CardBody, Button, Label, Input, Icon, ModalFooter } from 'mdbreact';
import { Link, Redirect } from 'react-router-dom'
class Login extends React.Component{

constructor(){
  super()
  this.state = {

    name:'',
    price:'',
    description:'',
    productType:'',
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
     
    <Row>
       
    
        <Col md="5" style={{marginLeft:'350px',marginTop:'15px'}} >
          <Card style={{marginTop:'-1px',height:'500px'}}>
            <CardBody className="mx-6">
              <div className="text-center">
                <h3 className="dark-grey-text mb-5">
                  <strong >Add Product</strong>
                </h3>
              </div>
              <Input 
                label="Name"
                group
                type="text" name='name' id='name'
                validate
                error="wrong"
                success="right" value={this.state.name} onChange={this.nameChangeHandler} 
              />
              <Input 
                label="Price"
                group
                type="number" min="1" step="1" name='price' id='Price'
                validate
                error="wrong"
                success="right" value={this.state.price} onChange={this.priceChangeHandler} 
              />
              <Input 
                label="Description"
                group
                type="text" name='description' id='description'
                validate
                error="wrong"
                success="right" value={this.state.description} onChange={this.descriptionChangeHandler} 
              />
              <Input
                label="Product Type"
                group
                type="text" name='productType' id='productType'
                validate
                containerClass="mb-0"  value={this.state.productType} onChange={this.ptypeChangeHandler}
               
              />
              
              <div className="text-center mb-3">
                <Button
                  type="button"
                  gradient="dusty-grass"
                  rounded
                  className="btn-block z-depth-1a"
                  onClick={this.handleSubmit}
                >
                  ADD PRODUCT                </Button>
              </div>
            </CardBody>
            
          </Card>
        </Col>
      </Row>
    </Container>
 
  )
}
}

export default Login;