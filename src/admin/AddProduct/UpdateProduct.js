import React from 'react'
import { 
  Form, Button
} from 'react-bootstrap'
import Axios from 'axios';
import 'mdbreact/dist/css/mdb.css'
import { Container,MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBView} from 'mdbreact';
import { Redirect } from 'react-router-dom';


class UpdateProfile extends React.Component {

constructor(props){
  super(props)

  this.state = {
    product:[],
    path:'',

  }
}

  getProduct = pid => {
   Axios.get("http://localhost:3000/products/" + pid);
 };


componentDidMount()
    {
         Axios.get("http://localhost:3000/products/")
        .then(res=>{
            console.log(res)
            this.setState({product:res.data,path:'http://localhost:3000/uploads/'})
        })
       
        .catch(err=>{
            console.log(err)
        })


    }

    componentWillUnMount(){
      this.serverRequest.abort();
    }




    editProduct = pid => {
      
  
     Axios.put("http://localhost:3000/update/" + pid);
    
  
 };




render(){


if(this.state.redirect === true){

return (
  <Redirect to='/editproduct' />
  )

}
  const{product}=this.state
  return(
<Container>
<div>
 <MDBContainer>
      <MDBRow>
        <MDBCol md="6" style={{ marginLeft:"250px"
 }}>
          <MDBCard>
          {product.map(product => (
            <MDBCardBody key={product.id}>
              <form onSubmit={this.formSubmitHandler} >
                <p className="h4 text-center py-4">ADD PRODUCT</p>
                <div className="grey-text">
                
                  <MDBInput 
                    label=" Product Name" value={product.name} onChange={this.nameChangeHandler}
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                  
                    label="Price" value={product.price} onChange={this.priceChangeHandler}
                    icon="home"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Description" value={product.description} onChange={this.descriptionChangeHandler}
                    icon="envolope"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                 
                
                </div>
                <div className="text-center py-6 mt-6">
                 <MDBBtn
                  type="submit"
                  gradient="dusty-grass"
                  rounded
                  className="btn-block z-depth-1a"
             
                 >
                  UPDATE PRODUCT
                </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
            ))}
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    
      </div>
      </Container>
  );
}};

export default UpdateProfile;