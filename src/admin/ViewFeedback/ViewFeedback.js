
import React from 'react'

import{MDBTable, MDBBtn,MDBRow, MDBTableBody, MDBTableHead,MDBContainer,Link} from 'mdbreact';
import Axios from 'axios';
import Navigation from '../Navigation';
import Footer from '../Footer';



class ViewUser extends React.Component {

constructor(props){
  super(props)


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

 deleteFeedback = fid => {
   var x=confirm("You want to delete?");
   if(x){
     Axios.delete("http://localhost:3000/feedback/" + fid);
     location.reload();
   }else{
     return false;
   }
 };

render(){

 const{contactus}=this.state
          return(
    <MDBContainer>
    <Navigation />
  <h2 className="h1-responsive font-weight-bold text-center my-3">
        Feedbacks
      </h2>
     <MDBRow > 
  <MDBTable style={{marginTop:'20px', width:'1000px', marginLeft:'40px'}} >
   
      <MDBTableHead color="primary-color" textWhite>
      
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Query</th>
          <th></th>
        </tr>
      </MDBTableHead>
{contactus.map(us => (
      <MDBTableBody key={us.id}>
        <tr>
          <td>{us.yourname}</td>
          <td>{us.youremail}</td>
          <td>{us.yourfeedback}</td>
          <td> <MDBBtn color="danger" type="submit" onClick={() => this.deleteFeedback(us._id)} >
           Delete </MDBBtn>
           </td>
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

export default ViewUser;