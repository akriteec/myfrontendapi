import React from 'react'
import Img from 'react-image'


import { 
  Form, Button, Container, FormGroup, FormText, Row,Image
} from 'react-bootstrap'
import{MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput} from 'mdbreact';
import { Label, Input } from 'reactstrap'
import { Link, Redirect } from 'react-router-dom'
import Axios from 'axios';
import './Feedback.css';


class Feedback extends React.Component {

constructor(){
  super()


  this.state = {
    yourname:'',
    youremail:'',
    yourfeedback:'',
    validationMessage:'',
     color: "#9ebd4b",
    redirect:false

  }
}

yournameChangeHandler = (event) => {

this.setState({yourname: event.target.value})
  
}
youremailChangeHandler = (event) => {

if(event.target.value.length < 6){
  this.setState({validationMessage:'Email must contain @ and . '})
}

  this.setState({youremail: event.target.value})

}
yourfeedbackChangeHandler = (event) => {

this.setState({yourfeedback: event.target.value})
  
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

  yourname:this.state.yourname,
  youremail:this.state.youremail,
  yourfeedback:this.state.yourfeedback,

}

//mfetch method XMLHTTPREquest
  Axios.post('http://localhost:3000/feedback/addFeedback', data , headers)

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
 
    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact us
      </h2>
      
      <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard style={{height:"500px", marginTop:"2px"}}>
            <MDBCardBody>
            <form onSubmit={this.formSubmitHandler} >
                <h3 className="mt-2">
                 Send Message Us
                </h3>
              <p className="dark-grey-text">
                Get in touch.
              </p>
              <div className="md-form">
                <MDBInput
                  icon="user" value={this.state.yourname} onChange={this.yournameChangeHandler}
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name" 
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope" value={this.state.youremail} onChange={this.youremailChangeHandler}
                  label="Your email"
                  iconClass="grey-text"
                  type="email"
                  id="form-email" 
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Your Feedback" value={this.state.yourfeedback} onChange={this.yourfeedbackChangeHandler} 
                  iconClass="grey-text"
                  type="textarea"
                  id="form-subject" 
                />
              </div>
              <div className="text-center">
                <MDBBtn color="light-blue" type="submit" as Link={'/'}>Contact Us</MDBBtn>
              </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol lg="7">
          <div
            id="map-container"
            className="rounded z-depth-1-half map-container"
            style={{ height: "400px" }}
          >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.8002002741123!2d-74.04948758529439!3d40.7224146793307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c251657bd1b2e7%3A0xc638f85fd964442!2sGrocery%20Store!5e0!3m2!1sen!2spl!4v1579956956968!5m2!1sen!2spl"
              title="This is a unique title"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
            />
          </div>
          <br />
          <MDBRow className="text-center">
            <MDBCol md="4">
                <img src="./Image/ma.png" width="30" height="30" />
              <p>Kathmandu, Maitidevi</p>
              <p className="mb-md-0">Nepal</p>
            </MDBCol>
            <MDBCol md="4">
             
                <img src="./Image/pho.png" width="30" height="30" />
             
              <p>+ 977 984 456 2871</p>
              <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
            </MDBCol>
            <MDBCol md="4">
                <img src="./Image/en.png" width="30" height="30" />
              <p>grocery@gmail.com</p>
              <p className="mb-md-0">gharkogrocery@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  );
}
}

export default Feedback