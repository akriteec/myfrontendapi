
import React from 'react'

import{MDBTable, MDBRow, MDBTableBody, MDBTableHead,MDBContainer} from 'mdbreact';
import Axios from 'axios';



class ViewUser extends React.Component {

constructor(){
  super()


  this.state = {
  	user:[],
  	path:'',

  }
}

 componentDidMount()
    {
         Axios.get("http://localhost:3000/users")
        .then(res=>{
            console.log(res)
            this.setState({user:res.data,path:'http://localhost:3000/uploads/'})
        })
       
        .catch(err=>{
            console.log(err)
        })
    }

render(){

 const{user}=this.state
          return(
  	<MDBContainer>
  <h2 className="h1-responsive font-weight-bold text-center my-3">
        Registered Users
      </h2>
  	 <MDBRow > 
  <MDBTable style={{marginTop:'20px', width:'1050px', marginLeft:'15px'}} >
   
      <MDBTableHead color="primary-color" textWhite>
      
        <tr>
          <th>Fullname</th>
          <th>Address</th>
          <th>Phone Number</th>
          <th>Email</th>
        </tr>
      </MDBTableHead>
{user.map(us => (
      <MDBTableBody key={us.id}>
        <tr>
          <td>{us.fullname}</td>
          <td>{us.address}</td>
          <td>{us.phone}</td>
          <td>{us.email}</td>
        </tr>
      </MDBTableBody>
     ))}
    </MDBTable>
    
    </MDBRow>
    </MDBContainer>
  );
}
}

export default ViewUser;