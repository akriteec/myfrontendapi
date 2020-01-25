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
  Axios.post('http://localhost:3023/feedback', data , headers)

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
 /*  
 <Container>
  <div className="bg">
 <Row>

 <div style={{width:'800px'}}>
                <h1 className="text-center" style={{width: "100%"}}>Contact Us Form</h1>
                <Form style = {{marginLeft: '200px'}}>
                    <FormGroup>
                    <Img src={'./Images/b.jpg'} decode={false} />
                        <Label for='yourname'>Your Name</Label>
                        <Input type='text' name='yourname' id='yourname'
                            value={this.state.fullname} onChange={this.yournameChangeHandler} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='youremail'>Your Email</Label>
                        <Input type='text' name='youremail' id='youremail'
                            value={this.state.youremail} onChange={this.youremailChangeHandler} />
                    </FormGroup>
                    <FormGroup>
                        <Label for='yourfeedback'>Your Feedback</Label>
                        <Input name='yourfeedback' id='yourfeedback' type='textarea'
                            value={this.state.yourfeedback} onChange={this.yourfeedbackChangeHandler} />
                    </FormGroup>
                    <Button color='primary' onClick={this.handleSubmit}>Contact Us!</Button>
                   
                </Form>
                </div>
                </Row>*/


    <section className="my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Contact us
      </h2>
      
      <MDBRow>
        <MDBCol lg="5" className="lg-0 mb-4">
          <MDBCard style={{height:"500px", marginTop:"2px"}}>
            <MDBCardBody>
                <h3 className="mt-2">
                 Send Message Us
                </h3>
              <p className="dark-grey-text">
                Get in touch.
              </p>
              <div className="md-form">
                <MDBInput
                  icon="user"
                  label="Your name"
                  iconClass="grey-text"
                  type="text"
                  id="form-name" value={this.state.yourname} onChange={this.yournameChangeHandler}
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="envelope"
                  label="Your email"
                  iconClass="grey-text"
                  type="text"
                  id="form-email" value={this.state.youremail} onChange={this.youremailChangeHandler}
                />
              </div>
              <div className="md-form">
                <MDBInput
                  icon="tag"
                  label="Your Feedback"
                  iconClass="grey-text"
                  type="textarea"
                  id="form-subject" value={this.state.yourfeedback} onChange={this.yourfeedbackChangeHandler} 
                />
              </div>
              <div className="text-center">
                <MDBBtn color="light-blue">Contact Us</MDBBtn>
              </div>
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
              <p>New York, 94126</p>
              <p className="mb-md-0">United States</p>
            </MDBCol>
            <MDBCol md="4">
             
                <img src="./Image/pho.png" width="30" height="30" />
             
              <p>+ 01 234 567 89</p>
              <p className="mb-md-0">Mon - Fri, 8:00-22:00</p>
            </MDBCol>
            <MDBCol md="4">
                <img src="./Image/en.png" width="30" height="30" />
              <p>info@gmail.com</p>
              <p className="mb-md-0">sale@gmail.com</p>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </section>
  );
}
}

export default Feedback