
import React from 'react'
// import {Link} from 'react-router-dom'
import{MDBTable, MDBRow, MDBTableBody, MDBTableHead,MDBContainer,MDBIMage,MDBBtn,MDBInput,MDBCol,Link} from 'mdbreact';
import Axios from 'axios';
import Navigation from '../Navigation'
import Footer from '../Footer';


class EditProduct extends React.Component {

constructor(props){
  super(props)


  this.state = {
  	product:[],
  	path:'',

  }
}

 componentDidMount()
    {
         Axios.get("http://localhost:3000/products")
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


    deleteProduct = productid => {
   var x=confirm("You want to delete?");
   if(x){
     Axios.delete("http://localhost:3000/products/" + productid);
     location.reload();
   }else{
     return false;
   }
 };

//  getProduct = pid => {

//   Axios.get("http://localhost:3000/products/" + pid);
// };
//     editProduct = pid => {

  
//      Axios.put("http://localhost:3000/update/" + pid);
    
  
//  };


render(){

 const{product}=this.state
          return(
  	<MDBContainer>
    <Navigation />
  <h2 className="h1-responsive font-weight-bold text-center my-3">
       Products
      </h2>
  	 <MDBRow > 
      <MDBCol md="3" style={{ marginLeft:"750px"
 }}>

    <Link to="/addproduct">
     <MDBBtn 
                 
         gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                 Link to="/addproduct" 
                 >
                  ADD NEW PRODUCT
                </MDBBtn>
                </Link>
                </MDBCol>
  <MDBTable style={{marginTop:'20px', width:'990px', marginLeft:'50px' , marginRight:'30px'}} >
   
      <MDBTableHead color="primary-color" textWhite>
      
        <tr>
          <th>Image</th>
          <th>Product Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </MDBTableHead>
{product.map(us => (
      <MDBTableBody key={us.id}>
        <tr>
      
       <td><img style={{height:"100px", width:"100px"}} src={this.state.path+us.imagep} /> </td>
          <td>{us.name}</td>
           <td>{us.price}</td>
          <td>{us.description}</td>
          <td><Link to={`/updateproduct/my/${us._id}`}><img style={{height:"50px", width:"70px"}}    src='./Image/ed.png' /></Link></td> 
          <td><img style={{height:"50px", width:"50px"}} onClick={() => this.deleteProduct(us._id)} src='./Image/de.png' /></td>
          
        
        </tr>
      </MDBTableBody>
     ))}
    </MDBTable>
    
    </MDBRow>
     <Footer />
    </MDBContainer>
  );
}
}

export default EditProduct;