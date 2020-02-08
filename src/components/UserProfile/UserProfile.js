import React, { Component } from 'react'
import Axios from 'axios'
import { Container,MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBView} from 'mdbreact';
import { Redirect } from 'react-router-dom';

export default class UserProfile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: null,
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem("token")}` }
            },
            selectedFile: null,
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:3000/users/me', this.state.config)
            .then((response) => {
                this.setState({
                    user: response.data
                })
            });
    }

    // handleFileSelect = (e) => {
    //     this.setState({
    //         selectedFile: e.target.files[0]
    //     })
    // }

    // uploadFile = (e) => {
    //     e.preventDefault();
    //     const data = new FormData()
    //     data.append('myFile', this.state.selectedFile)
    //     Axios.post('http://localhost:3000/upload', data, this.state.config)
    //         .then((response) => {
    //             this.setState({
    //                 user: { ...this.state.user, image: response.data.filename }
    //             })
    //         }).catch((err) => console.log(err.response))
    // }

    updateUser = (e) => {
        e.preventDefault();
        Axios.put('http://localhost:3000/users/me', this.state.fullname, this.state.address,this.state.phone,this.state.email,this.state.config)
            .then((response) => console.log(response.data)).catch((err) => console.log(err.response))
        this.props.history.push('/index');
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


    render() {
        // if (this.state.user === null) {
        //     return <h3>Loading ...</h3>
        // } else {
            return (
               <Container>
<div>
 <MDBContainer style={{
  paddingLeft:"20px"}}>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
             
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

                 
                  
                
                </div>
                <div className="text-center py-6 mt-6">
                 <MDBBtn
                  type="submit"
                  gradient="blue"
                  rounded
                  className="btn-block z-depth-1a"
                 >
                  Update Profile
                </MDBBtn>
                </div>
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
            )
        
    }
}