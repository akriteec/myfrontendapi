
import React from 'react'

import{Container, MDBTable, MDBRow, MDBBtn,MDBTableBody, MDBTableHead,MDBContainer,Link} from 'mdbreact';
import Axios from 'axios';
import Navigation from '../Navigation';
import Footer from '../Footer';



class ViewOrder extends React.Component {

constructor(){
  super()


  this.state = {
  	buy:[],
  	path:'',

  }
}

 componentDidMount()
    {
         Axios.get("http://localhost:3000/buy")
        .then(res=>{
            console.log(res)
            this.setState({user:res.data,path:'http://localhost:3000/uploads/'})
        })
       
        .catch(err=>{
            console.log(err)
        })
    }

deleteUser = vuid => {
   var x=confirm("You want to delete?");
   if(x){
     Axios.delete("http://localhost:3000/buy/" + vuid);
     location.reload();
   }else{
     return false;
   }
 };

render(){

 const{buy}=this.state
          return(
            <div>
            <Container>
             <Navigation />
  	<MDBContainer>
   
  <h2 className="h1-responsive font-weight-bold text-center my-3">
        Registered Users
      </h2>
  	 <MDBRow > 
  <MDBTable style={{marginTop:'20px', width:'1000px', marginLeft:'40px'}} >
   
      <MDBTableHead color="primary-color" textWhite>
      
        <tr>
          <th>Fullname</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th></th>
        </tr>
      </MDBTableHead>
{buy.map(us => (
      <MDBTableBody key={us.id}>
        <tr>
          <td>{us.fullname}</td>
          <td>{us.address}</td>
          <td>{us.phone}</td>
          <td>{us.email}</td>
         <td> <Link><MDBBtn color="danger" type="submit" onClick={() => this.deleteUser( us._id)} >
           Delete </MDBBtn></Link>
           </td>
        </tr>
      </MDBTableBody>
     ))}
    </MDBTable>
    
    </MDBRow>
    </MDBContainer>
    </Container>
     <Footer />
    </div>
  );
}
}

export default ViewUser;