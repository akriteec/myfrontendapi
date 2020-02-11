import React from 'react'
import {

    Carousel, Container

} from 'react-bootstrap'
import Footer from '../Footer'
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBMask, MDBIcon, MDBView, MDBBtn } from "mdbreact";
import { Redirect, Link } from 'react-router-dom';
import Navigation from '../Navigation'

class Home extends React.Component {

constructor(){
  super()
  this.state = {
     color: "#9ebd4b",

  }

}
Footer = () => {
  if(this.state.redirect){

return (
  <Redirect to='/about' />
  )
}
  
  return (

 <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          GroceryShop
        </h2>
        <p className="text-center w-responsive mx-auto mb-5">
          Gharko Grocery is intuitive and easy to use which will help people to find 
            the groceries product they are looking for in just a click and will also saves their time. 
             Gharko grocery has modernized 
              its way of shopping groceries in shop to online. Moreover, to make users life easier just by
               clicking some buttons which would make our big works to be done in just an hour. </p>
        <MDBRow>
          <MDBCol lg="5">
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img
                className="img-fluid"
                src="./Image/ss.jpg"
                alt=""
              />
              <a href="#!">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
          </MDBCol>
          <MDBCol lg="7">
            <h3 className="font-weight-bold mb-3 p-0">
              <strong>About GharkoGrocery</strong>
            </h3>
            <p>
              Grocery shopping. Everyone has to do it, but not everyone knows what they’re doing. 
                We rounded up some of our top 2020 grocery store tips, tricks, and helpful advice so 
                that next time users walk through those whooshing doors, they'll be a master in the fine 
                art of grocery shopping. 
                User refrigerator, pantry, and cupboards — and, ultimately, your belly — will thank you. 
            </p>
          {/*  <MDBBtn as={Link} to="/about" color="success" size="md" className="waves-light ">
              Read more
            </MDBBtn>*/}
             <Link to='/about' className="blue-text ml-1">READ MORE </Link>
          </MDBCol>
        </MDBRow>
         </MDBCardBody>
         </MDBCard>
)
}

  render(){
  return(
   <Container>
   <Navigation />
   <Carousel>
        <Carousel.Item>
          <img
          height = "500px"
            className="d-block w-100"
            src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3846,w_5421,x_216,y_69/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/peli-peli-kitchen_w40psz.jpg
            "
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
        
          height = "500px"
            className="d-block w-100"
            src="https://images.squarespace-cdn.com/content/v1/56c623a907eaa033562424bb/1472517836831-BIRMO2D0TYQGHOVN1Q16/ke17ZwdGBToddI8pDm48kFA9zd0KVW7B7zvvizl8CJYUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcKOEUgBUYQ7_rAKz3ua5P61LnR90rif4Svt5YafJynk1sUzUoF4VrfKQlp04kF3vD/wholefoodsAD1.jpg?format=2500w"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
          
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            height = "500px"
            className="d-block w-100"
            src="https://images.squarespace-cdn.com/content/v1/56c623a907eaa033562424bb/1472517858737-LYMD4V1RORWVVGDO995L/ke17ZwdGBToddI8pDm48kFA9zd0KVW7B7zvvizl8CJYUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcKOEUgBUYQ7_rAKz3ua5P61LnR90rif4Svt5YafJynk1sUzUoF4VrfKQlp04kF3vD/WF+ad.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      < this.Footer/>
      <Footer />
      </Container>

  );
}
}

export default Home