import React from 'react'
import { 
  Form, Button
} from 'react-bootstrap'
import Axios from 'axios';
import 'mdbreact/dist/css/mdb.css'
import { Container,MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBView} from 'mdbreact';
import { Redirect } from 'react-router-dom';


class AddProduct extends React.Component {

constructor(props){
  super(props)

  this.state = {
    name:'',
    price:'',
    description:'',
    filename:'',
    validationMessage:'',
    redirect:false

  }
}

    handleFileSelected = event => {
        this.setState({filename: event.target.files[0]})
        //for image url
        let reader = new FileReader();

        reader.onloadend = () => {
            this.setState({imagePreviewUrl: reader.result});
        }

        reader.readAsDataURL(event.target.files[0])
    }


nameChangeHandler = (event) => {

this.setState({name: event.target.value})
  
}
priceChangeHandler = (event) => {

this.setState({price: event.target.value})
  
}
descriptionChangeHandler = (event) => {


  this.setState({description: event.target.value})
}

formSubmitHandler = (e) => {
  e.preventDefault()


var headers = {

'Content-Type':'application/json'
}

 const fd = new FormData();
            const imageName = this
                .state
                .filename
                .name
                .toLowerCase();
            fd.append('imageFile', this.state.filename, imageName);
            Axios
                .post('http://localhost:3000/upload', fd)
                .then(res => {
                    console.log(res);

var data = {
  name:this.state.name,
  price:this.state.price,
  description:this.state.description,
  imagep:'imageFile-' + imageName

}

  Axios.post('http://localhost:3000/addProduct', data , headers)

.then( (response) => {
  console.log(response.data.status);
  if(response.status === 200){

    this.setState({redirect:true})
  }

})
.catch( (err) =>  {

})

})

  // console.log(this.state)
}

render(){

//what to render based in state

if(this.state.redirect === true){

return (
  <Redirect to='/editproduct' />
  )

// toast message

}
 let $imagePreview = (
            <div className="previewText image-container">Please select an Image for Preview</div>
        );
        if (this.state.imagePreviewUrl) {
            $imagePreview = (
                <div className="image-container text-center"><img src={this.state.imagePreviewUrl} alt="icon" width="200" height="200"/>
                </div>
            );
        }


  return(
<Container>
<div>
 <MDBContainer>
      <MDBRow>
        <MDBCol md="6" style={{ marginLeft:"250px"
 }}>
          <MDBCard>
            <MDBCardBody>
              <form onSubmit={this.formSubmitHandler} >
                <p className="h4 text-center py-4">ADD PRODUCT</p>
                <div className="grey-text">
                
                  <MDBInput 
                    label=" Product Name" value={this.state.name} onChange={this.nameChangeHandler}
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                  
                    label="Price" value={this.state.price} onChange={this.priceChangeHandler}
                    icon="home"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Description" value={this.state.description} onChange={this.descriptionChangeHandler}
                    icon="envolope"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    type="file"
                                    inputProps={{
                                    accept: 'image/*'
                                }}
                                    name="avatar"
                                    onChange={this.handleFileSelected}
                                    ref={fileInput => this.fileInput = fileInput}/> {$imagePreview}
                        
                  
                
                </div>
                <div className="text-center py-6 mt-6">
                 <MDBBtn
                  type="submit"
                  gradient="dusty-grass"
                  rounded
                  className="btn-block z-depth-1a"
                 >
                  ADD PRODUCT
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
}};

export default AddProduct;