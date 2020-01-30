import React from "react";
import {  MDBRow, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge } from "mdbreact";
import axios from 'axios';

class Product extends React.Component {

  
     constructor() {
        super()
    
        this.state = {
             
        }
    }
   
    
    render() {
         
          return(

    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Our Products
      </h2>
      <MDBRow > 
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
          <MDBCard className="align-items-center" style={{height:"400px"}}>
            <MDBCardImage  style={{height:"200px"}}
           
                className="img-fluid"
               
              />
            <MDBCardBody className="text-center">
              <a className="grey-text">
              
                 
              </a>
              <h5>
                <strong>
                  <a className="dark-grey-text">
                  
                   <p>
                  
                  </p>
                    <MDBBadge pill color="danger">
                      
                    </MDBBadge>
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                 <p>
                  
                  </p>
              </h4>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        
      </MDBRow>
    </section>
  );
}
}

export default Product;