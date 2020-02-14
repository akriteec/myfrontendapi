import React from 'react';
import { MDBBtn, Container, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import Navigation from './Navigation'
import Footer from './Footer'

const Order = () => {
  return (
    <Container>
  <Navigation />
    <MDBCol style={{ maxWidth: "22rem", marginTop:"100px", marginLeft:"400px", marginBottom:"200px" }}>
      <MDBCard>
       
        <MDBCardBody>
          <MDBCardTitle>Home Delivery Service</MDBCardTitle>
          <MDBCardText>Your order has been placed successfully.</MDBCardText>
          <MDBBtn href="#">Thank You</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <Footer />
    </Container>
  )
}

export default Order;