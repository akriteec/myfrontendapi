import React from 'react'

import { 
  Form, Button, Container, FormGroup, FormText
} from 'react-bootstrap'
import { Label, Input } from 'reactstrap'
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
 <div style={{width:'800px'}}>
                <h1 className="text-center" style={{width: "100%"}}>Register Form</h1>
                <Form style = {{marginLeft: '200px',background: this.state.color}}>
                    <FormGroup>
                        <Label for='fullname'>Full Name</Label>
                        <Input type='text' name='fullname' id='fullname'
                            value={this.state.fullname} onChange={this.fullnameChangeHandler} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='address'>Address</Label>
                        <Input type='text' name='address' id='address'
                            value={this.state.address} onChange={this.addressChangeHandler} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='phone'>Phone</Label>
                        <Input name='phone' id='phone' type='text'
                            value={this.state.phone} onChange={this.phoneChangeHandler} />
                    </FormGroup>
                     <FormGroup>
                        <Label for='email'>Email</Label>
                        <Input type='text' name='email' id='email'
                            value={this.state.email} onChange={this.emailChangeHandler} />
                    </FormGroup>
                    
                    <FormGroup>
                        <Label for='password'>Password</Label>
                        <Input type='password' name='password' id='password'
                            value={this.state.password} onChange={this.passwordChangeHandler} />
                    </FormGroup>
                    <Button color='primary' onClick={this.handleSubmit}>Register!</Button>
                   
                </Form>
                 <h4 className="text-center">Already a user. <Link to='/'>Login here!</Link></h4>
                </div>
            </Container>
  )
}
}

export default Registration