import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBView,MDBMask, MDBContainer } from "mdbreact";

class About extends React.Component {

constructor(){
  super()
}
 Footer = () => {
  return (

<MDBCard className="my-4 px-1 pb-4 text-center">
        <MDBCardBody>
          <h2 className="h1-responsive font-weight-bold my-4">
            Our amazing team
          </h2>
          <MDBRow>
            <MDBCol md="4" className="mb-md-0 mb-5">
               <img
                src="./Image/h.jpg"
                width="220px"
                height="150px"
                className="rounded z-depth-1-half img-fluid"
                alt="Sample avatar"
              />
              <h4 className="font-weight-bold dark-grey-text my-4">
                Maria Melyah
              </h4>
              <h6 className="text-uppercase grey-text mb-3">Photographer</h6>
              <MDBBtn tag="a" floating size="sm" className="mx-1 mb-0 btn-fb">
              </MDBBtn>
            </MDBCol>

            <MDBCol md="4" className="mb-md-0 mb-5">
            
                <img
                src="./Image/hhh.jpg"
                width="160px"
                height="150px"
                className="rounded z-depth-1-half img-fluid"
                alt="Sample avatar"
              />
              <h4 className="font-weight-bold dark-grey-text my-4">John Doe</h4>
              <h6 className="text-uppercase grey-text mb-3">
                Front-end Developer
              </h6>
            </MDBCol>

            <MDBCol md="4" className="mb-md-0 mb-5">
           
               <img
                src="./Image/hh.jpg"
                width="220px"
                height="250px"
                className="rounded z-depth-1-half img-fluid"
                alt="Sample avatar"
              />
              <h4 className="font-weight-bold dark-grey-text my-4">
                Sofhiya Kate
              </h4>
              <h6 className="text-uppercase grey-text mb-3">Web Developer</h6>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>


)
}

Header = () => {
return(
<section className="my-5">
        <h2 className="h1-responsive font-weight-bold text-center my-5">
          Why is it so great?
        </h2>
        <p className="lead grey-text w-responsive text-center mx-auto mb-5">
         Grocery planning is one of the best ways to save money at the grocery 
         store and stick to your budget. Here are the reasons to plan your food shopping.
        </p>

        <MDBRow>
          <MDBCol lg="5" className="text-center text-lg-left">
            <img
              className="img-fluid"
              src="./Image/s.png"
              alt=""
            />
          </MDBCol>
          <MDBCol lg="7">
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Saves Time</h5>
                <p className="grey-text">
                  You know that if you don’t make a list you probably forget things, which means more trips to the store.
                  More trips to the store is a waste of time.
                  Plus, your time in the store will go faster if you have a list and know what you’re going to buy before you even get there.
                  You can make great lists and buy products in a minute through this online grocery shop that Saves your time.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Saves Money</h5>
                <p className="grey-text">
                  Everyone does it.
                  You go to the store and all the temptations hit you in the face.
                  You want them.
                  You want whatever you see that’s easy to fix and shove in your mouth. But that’s not the best way to save money.
                   Planning shopping based on online sales and seasonality of produce is the best way to save money.
                </p>
              </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3">
              <MDBCol size="1">
                <MDBIcon icon="share" size="lg" className="indigo-text" />
              </MDBCol>
              <MDBCol xl="10" md="11" size="10">
                <h5 className="font-weight-bold mb-3">Avoids Waste</h5>
                <p className="grey-text">
                 When you don’t know what you’re going to do with your purchase,
                  it is easy to forget you even bought it and you therefore waste it. If you know you need 1/2 onion for something specific,
                   you’re going to use it instead of just buying a bunch of onions with no plan.
                   You can avoid that waste by having a plan.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </section>
 
)
}


  render(){
  return(
    <MDBCard className="my-5 px-5 pb-5">
      <MDBCardBody>
        <MDBRow>
          <MDBCol md="12">
            <MDBCard reverse>
              <MDBView hover cascade waves>
                <img
                  src="./Image/f.jpg"
                  alt="ba"
                  className="img-fluid"
                />
                <MDBMask overlay="white-slight" className="waves-light" />
              </MDBView>
              <MDBCardBody cascade className="text-center">
                <h2 className="font-weight-bold">
                  <a href="#!">About GharkoGrocery</a>
                </h2>
              </MDBCardBody>
            </MDBCard>
            <MDBContainer className="mt-5">
              <p>
                Grocery shopping. Everyone has to do it, but not everyone knows what they’re doing. 
                We rounded up some of our top 2020 grocery store tips, tricks, and helpful advice so 
                that next time users walk through those whooshing doors, they'll be a master in the fine 
                art of grocery shopping. 
                User refrigerator, pantry, and cupboards — and, ultimately, your belly — will thank you. 
              </p>
              <p>
            Gharko Grocery is intuitive and easy to use which will help people to find 
            the groceries product they are looking for in just a click and will also saves their time. 
             Gharko grocery has modernized 
              its way of shopping groceries in shop to online. Moreover, to make users life easier just by
               clicking some buttons which would make our big works to be done in just an hour. 
              </p>
            </MDBContainer>
          </MDBCol>
        </MDBRow>
        <this.Header/>
         < this.Footer/>
      </MDBCardBody>
    </MDBCard>

  );
}
}

export default About;