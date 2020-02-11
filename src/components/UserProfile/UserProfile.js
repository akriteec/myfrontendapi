import React, { Component } from 'react'
import Axios from 'axios'
import { Form, Card, Col, Row, CardBody, FormGroup, Input, Button, Label, CustomInput, Container } from 'reactstrap'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody, MDBView} from 'mdbreact'
import Navigation from '../Navigation'
import Footer from '../Footer'
export default class UserProfile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            user: null,
            config: {
                headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
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

    handleFileSelect = (e) => {
        this.setState({
            selectedFile: e.target.files[0]
        })
    }

    uploadFile = (e) => {
        e.preventDefault();
        const data = new FormData()
        data.append('myFile', this.state.selectedFile)
        Axios.post('http://localhost:3000/upload', data, this.state.config)
            .then((response) => {
                this.setState({
                    user: { ...this.state.user, image: response.data.filename }
                })
            }).catch((err) => console.log(err.response))
    }

    updateUser = (e) => {
        e.preventDefault();
        Axios.put('http://localhost:3000/users/update', this.state.user, this.state.config)
            .then((response) => console.log(response.data)).catch((err) => console.log(err.response))
        this.props.history.push('/userprofile');
    }

    handleChange(e) {
        this.setState({
            user: { ...this.state.user, [e.target.name]: e.target.value }
        })
    }

    render() {
        if (this.state.user === null) {
            return <h3>Loading ...</h3>
        } else {
            return (
            <Container>
             <Navigation />
<div>
 <MDBContainer style={{
  paddingLeft:"200px", marginTop:"20px"}}>
      <MDBRow>
        <MDBCol md="8">
          <MDBCard>
            <MDBCardBody>
                        <Form>
                            <FormGroup>
                                <Label for='fullname'>Fullname</Label>
                                <Input type='text'
                                    id="fullname"
                                    name='fullname'
                                    value={this.state.user.fullname}
                                    onChange={(e) => this.handleChange(e)}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for='address'>Address</Label>
                                <Input type='text' id='address'
                                    name='address'
                                    value={this.state.user.address}
                                    onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                             <FormGroup>
                                <Label for='phone'>Phone Number</Label>
                                <Input type='text' id='phone'
                                    name='phone'
                                    value={this.state.user.phone}
                                    onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                             <FormGroup>
                                <Label for='email'>Email</Label>
                                <Input type='text' id='email'
                                    name='email'
                                    value={this.state.user.email}
                                    onChange={(e) => this.handleChange(e)} />
                            </FormGroup>
                            <FormGroup>
                                <img className='img-thumbnail'
                                    width='400' src={`http://localhost:3001/uploads/${this.state.user.image}`}
                                    alt="profile" />
                                <CustomInput type='file' id='profilePic'
                                    onChange={this.handleFileSelect} />
                                {this.state.selectedFile ? (<FileUploadButton
                                    uploadFile={this.uploadFile} />) : null}
                            </FormGroup>
                            <Button color='danger' onClick={this.updateUser} block>Update User</Button>
                            </Form>
                     </MDBCardBody>
          </MDBCard>
        </MDBCol>

        
      </MDBRow>
    </MDBContainer>

    
      </div>
      <Footer />
      </Container>
            )
        }
    }
}