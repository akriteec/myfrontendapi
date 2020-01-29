import React from 'react'
import { 
  Form, Button
} from 'react-bootstrap'
import Axios from 'axios';
import 'mdbreact/dist/css/mdb.css'
import { Container,MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBView,ModalFooter} from 'mdbreact';
import { Redirect,Link } from 'react-router-dom';
class Registration extends React.Component {

constructor(){
  super()

  this.state = {
    

  }
}




render(){

//what to render based in state

if(this.state.redirect){

return (
  <Redirect to='/home' />
  )

// toast message

}



  return(

<Container>
<div>
 <MDBContainer>
      <MDBRow>
      <MDBCol md="2" style={{marginRight:'800px',height:'500px', marginTop:'15px'}} >
        <img src= "./Image/s.jpg" />
        </MDBCol>
    
        <MDBCol md="5" style={{marginLeft:'-350px',marginTop:'15px'}} >
          <MDBCard style={{marginTop:'-1px',height:'428px'}}>
            <MDBCardBody className="mx-6">
              <form  >
                <p className="h4 text-center py-4">Login</p>
                <div className="grey-text">


                  <MDBInput
                    label="Email" 
                    icon="envolope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  
                  <MDBInput
                    label="Password" 
                    icon="lock"
                    group
                    type="password"
                    validate
                  />
                
                </div>
                <div className="text-center py-6 mt-6">
                 <MDBBtn
                  type="submit"
                  gradient="blue"
                  rounded
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
      </Container>
  );
}};

export default Registration;