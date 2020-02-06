import React from 'react'
import { 
  Form, Button
} from 'react-bootstrap'
import Axios from 'axios';
import 'mdbreact/dist/css/mdb.css'
import { Container,MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBView} from 'mdbreact';
import { Redirect } from 'react-router-dom';


class Registration extends React.Component {

constructor(props){
  super(props)

  this.state = {
    fullname:'',
    address:'',
    phone:'',
    email:'',
    password:'',
    filename:'',
    checkValidImage: '',
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


fullnameChangeHandler = (event) => {

this.setState({fullname: event.target.value})
  
}
addressChangeHandler = (event) => {

this.setState({address: event.target.value})
  
}
phoneChangeHandler = (event) => {


  this.setState({phone: event.target.value})
}

emailChangeHandler = (event) => {

/*if(event.target.value.length < 6){
  this.setState({validationMessage:'Username Cannot be less than 6 chars '})
}*/

  this.setState({email: event.target.value})
}

passwordChangeHandler = (event) => {

this.setState({password: event.target.value})
  
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
  fullname:this.state.fullname,
  address:this.state.address,
  phone:this.state.phone,
  email:this.state.email,
  password:this.state.password,
  imageu:'imageFile-' + imageName

}

  Axios.post('http://localhost:3000/users/signup', data , headers)

.then( (response) => {
  console.log(response.data.status);
  if(response.status === 200){

    this.setState({redirect:true})
  }
localStorage.setItem('token', response.data.token)

this.setState({
                    fullname:'',
    address:'',
    phone:'',
    email:'',
    password:'',
    filename:'',
                    redirect: true
                  })
})
.catch( (err) => {

})

})

  // console.log(this.state)
}

render(){

//what to render based in state

if(this.state.redirect === true){

return (
  <Redirect to='/login' />
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

//if(this.state.redirect == true){ 

//   //actual redirect work

// }
<Container>
<div>
 <MDBContainer style={{
  paddingLeft:"20px"}}>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form onSubmit={this.formSubmitHandler} >
                <p className="h4 text-center py-4">NEW ACCOUNT?</p>
                  <h6>Create one for FREE here and become a Grocery member.</h6>
                <div className="grey-text">
                
                  <MDBInput 
                    label=" Fullname" value={this.state.fullname} onChange={this.fullnameChangeHandler}
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                  
                    label="Address" value={this.state.address} onChange={this.addressChangeHandler}
                    icon="home"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Phone Number" value={this.state.phone} onChange={this.phoneChangeHandler}
                    icon="envolope"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Email" value={this.state.email} onChange={this.emailChangeHandler}
                    icon="envolope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                  />
                  
                  <MDBInput
                    label="Password" value={this.state.password} onChange={this.passwordChangeHandler}
                    icon="lock"
                    group
                    type="password"
                    validate
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
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                 >
                  Register
                </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

         <MDBCol md="2" style={{marginLeft:'-5px', marginTop:'50px'}} >
        <img src= "./Image/a.png" />
        </MDBCol>
      </MDBRow>
    </MDBContainer>

    
      </div>
      </Container>
  );
}};

export default Registration;