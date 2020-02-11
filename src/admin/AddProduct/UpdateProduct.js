import React from 'react'
import { 
  Form, Button
} from 'react-bootstrap'
import Axios from 'axios';

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
   name:'',
   price:'',
   description:'',
   selectedFile:'',
   ID:'',
    config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
            },
            selectedFile: null,
    redirect:false

  }
}
nameChangehandler = (event) => {

this.setState({name: event.target.value})
  
}
priceChangeHandler = (event) => {

this.setState({price: event.target.value})
  
}
descriptionChangeHandler = (event) => {


  this.setState({description: event.target.value})
}

componentWillMount() {
  var usId= this.props.match.params.id;
  Axios.get("http://localhost:3000/my/" +usId ,this.state.config)
        .then(res=>{
            console.log(res.data)
            this.setState({
              us:res.data,
              path:'http://localhost:3000/uploads/',
              name:res.data.name,
              price:res.data.price,
              description:res.data.description,
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
                        name: this.state.name,
                        price: this.state.price,
                        description: this.state.description,
      
                       // Drimage: 'imageFile-' + this.state.selectedFile.name
                    }
                    Axios
                        .put('http://localhost:3000/update/' + this.state.ID, data, this.state.config)
                        .then((res) => {
                            console.log(res.data)
                            if (res.status == 200) {
                                this.setState({redirect: true})
                            }

                        })
                        .catch((err) => {
                            console.log(err)
                        })
    }

render(){

if(this.state.redirect ){

   return(<Redirect to="/editproduct"/>)
  
}
const {us} = this.state

    
  return(

<Container>
<div>
 <MDBContainer >
      <MDBRow>
      <MDBCol md="3">
        </MDBCol>
        <MDBCol md="6" style={{marginTop:20}}>
          <MDBCard>
            <MDBCardBody>
              <form onSubmit={this.handleSubmit} >
                <p className="h4 text-center py-4">Update Product</p>
                <div className="grey-text">
           
                  <MDBInput 
                    label="  Name" 
                    value={this.state.name} 
                    onChange={this.nameChangehandler}
                    group
                    type="text"
                    validate
                    id="name"
                    name="name"
                    error="wrong"
                    success="right"/>
                  <MDBInput
                  
                    label="Price"
                     value={this.state.price} 
                      onChange={this.priceChangeHandler}
                    
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"/>
                  <MDBInput
                    label="Description" 
                    value={this.state.description} 
                   onChange={this.descriptionChangeHandler}
                    
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
                  Update 
                </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

      </MDBRow>
    </MDBContainer>

    
      </div>
      </Container>
  );
}
};

export default UpdateProduct;