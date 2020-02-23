import React from 'react'
import { 
  Form, Button
} from 'react-bootstrap'
import Axios from 'axios';
import Navigation from '../Navigation'
import Footer from '../Footer'
import { FormGroup, CustomInput } from 'reactstrap'
import 'mdbreact/dist/css/mdb.css'
import { Container,MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBView} from 'mdbreact';
import { Redirect } from 'react-router-dom';

class UpdateProduct extends React.Component {

constructor(props){
  super(props)

  this.state = {

    path:'',
    us:'',
   pname:'',
   pprice:'',
   pdescription:'',
   pemail:'',
   pphone:'',
   selectedFile:'',
   ID:'',
    config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            },
            selectedFile: null,
    redirect:false

  }
}
pnameChangehandler = (event) => {

this.setState({pname: event.target.value})
  
}
ppriceChangeHandler = (event) => {

this.setState({pprice: event.target.value})
  
}
pdescriptionChangeHandler = (event) => {


  this.setState({pdescription: event.target.value})
}
pemailChangeHandler = (event) => {


  this.setState({pemail: event.target.value})
}
pphoneChangeHandler = (event) => {


  this.setState({pphone: event.target.value})
}
componentWillMount() {
  var usId= this.props.match.params.id;
  Axios.get("http://localhost:3000/my/" +usId ,this.state.config)
        .then(res=>{
            console.log(res.data)
            this.setState({
              us:res.data,
              path:'http://localhost:3000/uploads/',
              pname:res.data.name,
              pprice:res.data.price,
              pdescription:res.data.description,
              pemail:res.data.pemail,
              pphone:res.data.pphone,
              imagep:res.data.imagep,
              ID: res.data._id

            })
        })
   
      
 }
     handleFileSelected = event => {
        this.setState({selectedFile: event.target.files[0]})
        //for image url
        let reader = new FileReader();

        reader.onloadend = () => {
            this.setState({imagePreviewUrl: reader.result});
        }

        reader.readAsDataURL(event.target.files[0])
    }
handleSubmit = event => {
        event.preventDefault();
       

            var headers = {
                'Content-Type': 'application/json'
            }

            
                    var data = {
                        pname: this.state.pname,
                        pprice: this.state.pprice,
                        pdescription: this.state.pdescription,
                        pemail: this.state.pemail,
                        pphone: this.state.pphone
      
                       // Drimage: 'imageFile-' + this.state.selectedFile.name
                    }
                    Axios.post('http://localhost:3000/addCart', data , headers)

.then( (response) => {
  console.log(response.data.status);
  if(response.status === 200){

    this.setState({redirect:true})
  }
 

})
.catch( (err) =>  {

})

}


render(){
  

if(this.state.redirect ){

   return(<Redirect to="/order"/>)
  
}
const {us} = this.state

    
  return(

<Container>
  <Navigation />
<div>
 <MDBContainer >
      <MDBRow>
      <MDBCol md="3">
        </MDBCol>
        <MDBCol md="6" style={{marginTop:20}}>
          <MDBCard>
            <MDBCardBody>
              <form onSubmit={this.handleSubmit} >
                <p className="h4 text-center py-4">Buy Product</p>
                <div className="grey-text">

                  <MDBInput 
                    label="  Name" 
                    value={this.state.pname} 
                   // onChange={this.pnameChangehandler}
                    group
                    type="text"
                    validate
                    id="pname"
                    name="pname"
                    error="wrong"
                    success="right"/>
                  <MDBInput
                  
                    label="Price"
                     value={this.state.pprice} 
                      //onChange={this.ppriceChangeHandler}
                    
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"/>
                  <MDBInput
                    label="Description" 
                    value={this.state.pdescription} 
                  // onChange={this.pdescriptionChangeHandler}
                    
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"/>


                  <MDBInput
                    label="Email" 
                    value={this.state.pemail} 
                   onChange={this.pemailChangeHandler}
                    
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"/>

                     <MDBInput
                    label="Phone Number" 
                    value={this.state.pphone} 
                   onChange={this.pphoneChangeHandler}
                    
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"/>


                </div>
                <div className="text-center py-6 mt-6">
                 <MDBBtn
                  type="submit"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                 >
                  PLACE YOUR ORDER 
                </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

      </MDBRow>
    </MDBContainer>

    
      </div>
      <Footer />
      </Container>
  );
}
};

export default UpdateProduct;