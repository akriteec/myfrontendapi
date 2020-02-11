import React from 'react'
import Navigation from '../Navigation'
import Footer from '../Footer'
import { 
  Form, Button
} from 'react-bootstrap'
import Axios from 'axios';
import 'mdbreact/dist/css/mdb.css'
import { Container,MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBView,ModalFooter} from 'mdbreact';
import { Redirect,Link } from 'react-router-dom';
import {FormGroup,Alert} from 'reactstrap'
class Login extends React.Component {

constructor(props){
  super(props)

  this.state = {
    email:'',
    password:'',
    emailError:'',
    passwordError:'',
    redirect:false

  }
}


validate = () => {
  let emailError = "";
  let passwordError = "";

if (!this.state.email.includes("@")) {
emailError = "invalid email"
}
if (!this.state.password) {
passwordError = "Password should be greater than 6"
}
if (emailError || passwordError) {
this.setState({
emailError,
passwordError,

})
return false;
}
return true;
}

emailChangeHandler = (event) => {

  this.setState({email: event.target.value})
}

passwordChangeHandler = (event) => {

this.setState({password: event.target.value})
  
}

formSubmitHandler = (e) => {
  e.preventDefault()
 const isValid = this.validate();
  if (isValid) {


var headers = {

'Content-Type':'application/json'

}

var data = {

  email:this.state.email,
  password:this.state.password

}
   Axios.post('http://localhost:3000/users/login', data , headers)
  .then( (response) => {
  console.log(response.data);
   localStorage.setItem('token',response.data.token)
  if(response.status === 200){

    this.setState({redirect:true})
  }

    //store the token in local storage of broser for future use 

   

  })
.catch((err) => console.log(err.response))
        this.setState({ email: '', password: '' })


}
}

render(){

//what to render based in state

if(this.state.redirect === true){

return (
  <Redirect to='/userprofile' />
  )

}



  return(

<Container>
 <Navigation />

<div>
 <MDBContainer>
      <MDBRow>
      <MDBCol md="2" style={{marginRight:'800px',height:'500px', marginTop:'15px'}} >
        <img src= "./Image/s.jpg" />
        </MDBCol>
    
        <MDBCol md="5" style={{marginLeft:'-350px',marginTop:'15px'}} >
          <MDBCard style={{marginTop:'-1px',height:'428px'}}>
            <MDBCardBody className="mx-6">
              <form onSubmit={this.formSubmitHandler} >
                <p className="h4 text-center py-4">Login</p>
                <div className="grey-text">


                <FormGroup>
                  <MDBInput
                    label="Email" value={this.state.email} onChange={this.emailChangeHandler}
                    icon="envolope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                   {this.state.emailError
? (
<Alert color="danger" size="sm" className="mt-2">
{this.state.emailError}</Alert>
)
: null}
                  </FormGroup>
                  
                  <FormGroup>
                  <MDBInput
                    label="Password" value={this.state.password} onChange={this.passwordChangeHandler}
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                  {this.state.passwordError
? (
<Alert color="danger" size="sm" className="mt-2">
{this.state.passwordError}</Alert>
)
: null}
</FormGroup>
                
                </div>
                <div className="text-center py-6 mt-6">
                 <MDBBtn
                  type="submit"
                  gradient="blue"
                  
                  className="btn-block z-depth-1a"

                 >
                  Login
                </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
             <ModalFooter className="mx-5 pt-3 mb-1">
              <p className="font-small grey-text d-flex justify-content-end">
                Not a member?
                 <Link to='/registration' className="blue-text ml-1">Sign Up Here! </Link> 

               
                
              </p>
            </ModalFooter>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    
      </div>
  <Footer />
      </Container>
  );
}};

export default Login;