
import React from 'react'

import{MDBTable, MDBRow, MDBTableBody, MDBTableHead,MDBContainer} from 'mdbreact';
import Axios from 'axios';



class ViewUser extends React.Component {

constructor(){
  super()


  this.state = {
    contactus:[],
    path:'',

  }
}

 componentDidMount()
    {
         Axios.get("http://localhost:3000/feedback")
        .then(res=>{
            console.log(res)
            this.setState({contactus:res.data,path:'http://localhost:3000/uploads/'})
        })
       
        .catch(err=>{
            console.log(err)
        })
    }

render(){

 const{contactus}=this.state
          return(
    <MDBContainer>
  <h2 className="h1-responsive font-weight-bold text-center my-3">
        Feedbacks
      </h2>
     <MDBRow > 
  <MDBTable style={{marginTop:'20px', width:'1050px', marginLeft:'15px'}} >
   
      <MDBTableHead color="primary-color" textWhite>
      
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Query</th>
        </tr>
      </MDBTableHead>
{contactus.map(us => (
      <MDBTableBody key={us.id}>
        <tr>
          <td>{us.yourname}</td>
          <td>{us.youremail}</td>
          <td>{us.yourfeedback}</td>
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