
import React from 'react'

import{Container, MDBTable, MDBRow, MDBBtn,MDBTableBody, MDBTableHead,MDBContainer,Link} from 'mdbreact';
import Axios from 'axios';
import Navigation from '../Navigation';
import Footer from '../Footer';



class ViewOrder extends React.Component {

constructor(props){
  super(props)


  this.state = {
    order:[],
    path:'',

  }
}

 componentDidMount()
    {
         Axios.get("http://localhost:3000/view")
        .then(res=>{
            console.log(res)
            this.setState({order:res.data,path:'http://localhost:3000/uploads/'})
        })
       
        .catch(err=>{
            console.log(err)
        })
    }

deleteUser = vuid => {
   var x=confirm("You want to delete?");
   if(x){
     Axios.delete("http://localhost:3000/delete/" + vuid);
     location.reload();
   }else{
     return false;
   }
 };

render(){

 const{order}=this.state
          return(
            <div>
            <Container>
             <Navigation />
            
    <MDBContainer>
    
   
  <h2 className="h1-responsive font-weight-bold text-center my-3">
        All Orders
      </h2>
     <MDBRow > 
  <MDBTable style={{marginTop:'20px', width:'1000px', marginLeft:'40px'}} >
   
      <MDBTableHead color="primary-color" textWhite>
      
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th></th>
        </tr>
      </MDBTableHead>
{order.map(us => (
      <MDBTableBody key={us.id}>
        <tr>
          <td>{us.pname}</td>
          <td>{us.pprice}</td>
          <td>{us.pphone}</td>
          <td>{us.pemail}</td>
         <td> <Link><MDBBtn color="danger" type="submit" onClick={() => this.deleteUser( us._id)} >
           Delete </MDBBtn></Link>
           </td>
        </tr>
      </MDBTableBody>
     ))}
    </MDBTable>
    
    </MDBRow>
     <Footer />
    </MDBContainer>
    </Container>
    
    </div>
  );
}
}

export default ViewOrder;