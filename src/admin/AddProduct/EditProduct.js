
import React from 'react'

import{MDBTable, MDBRow, MDBTableBody, MDBTableHead,MDBContainer,MDBIMage} from 'mdbreact';
import Axios from 'axios';



class EditProduct extends React.Component {

constructor(){
  super()


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

render(){

 const{product}=this.state
          return(
  	<MDBContainer>
  <h2 className="h1-responsive font-weight-bold text-center my-3">
       Products
      </h2>
  	 <MDBRow > 
  <MDBTable style={{marginTop:'20px', width:'1050px', marginLeft:'15px'}} >
   
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
      
       <td><img style={{height:"90px", width:"90px"}} src={this.state.path+us.imagep} /> </td>
          <td>{us.name}</td>
           <td>{us.price}</td>
          <td>{us.description}</td>
          <td><img style={{height:"90px", width:"90px"}} src='./Image/a.png' /> </td>
          <td><img style={{height:"90px", width:"90px"}} src='./Image'/> </td>
          
         
        </tr>
      </MDBTableBody>
     ))}
    </MDBTable>
    
    </MDBRow>
    </MDBContainer>
  );
}
}

export default EditProduct;