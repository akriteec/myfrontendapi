import React from "react";
import { Container, MDBRow, Link, MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBBadge, MDBBtn,MDBTooltip,MDBIcon } from "mdbreact";
import axios from 'axios';
import Navigation from '../Navigation'
import Footer from '../Footer'

class Product extends React.Component {

  
     constructor() {
        super()
    
        this.state = {
             product:[],
             path:'',
        }
    }
    componentDidMount()
    {
         axios.get("http://localhost:3000/products")
        .then(res=>{
            console.log(res)
            this.setState({product:res.data,path:'http://localhost:3000/uploads/'})
        })
       
        .catch(err=>{
            console.log(err)
        })
    }

    
    render() {
          //this.state.posts
          const{product}=this.state
          return(
<Container>
 <Navigation />
    <section className="text-center my-5">
    
      <h2 className="h1-responsive font-weight-bold text-center my-5">
        Our Products
      </h2>
      <MDBRow > {product.map(prod => (
        <MDBCol lg="3" md="6" className="mb-lg-0 mb-4" key={product.id}>
          <MDBCard className="align-items-center" style={{height:"400px", marginBottom:"30px"}}>
            <MDBCardImage  style={{height:"200px"}}
           
                className="img-fluid"
                src={this.state.path+prod.imagep}
                alt="img"
              />
            <MDBCardBody className="text-center">
              <a className="grey-text">
                <p>
                    {prod.description}
                  </p>
                 
              </a>
              <h5>
                <strong>
                  <a className="dark-grey-text">
                  
                   <p>
                  
                  </p>
                    <MDBBadge pill color="danger">
                        {prod.price}
                    </MDBBadge>
                  </a>
                </strong>
              </h5>
              <h4 className="font-weight-bold blue-text">
                 <p>
                    {prod.name}
                  </p>
              </h4>


              <Link to={`/buy/my/${prod._id}`}>
              <MDBBtn rounded gradient="blue" className="mb-3 mt-3" >
               Buy Now  
              </MDBBtn>
              </Link>

              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
           ))}
      </MDBRow>
    </section>
    <Footer />
    </Container>
  );
}
}

export default Product;