import React from 'react';
import axios from 'axios'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput ,MDBCard, MDBCardBody, MDBCardImage, MDBCardGroup,MDBCardTitle, MDBCardText,MDBIcon} from 'mdbreact';
import 'mdbreact/dist/css/mdb.css'
import './PersonList.css'
export default class PersonList extends React.Component{
    state ={
        persons:[]
    }



    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users').then(res =>{
            console.log(res);
            this.setState({persons:res.data});
        });
    }

    render(){
        return(
                <div className="grid">
                {this.state.persons.map(person =>
                <MDBCardGroup className ="centeraline flex-item ">
                <MDBRow >
                 <MDBCol style={{ maxWidth: "17rem" }}>
                 <MDBCard>
                   <MDBCardBody>
                   <MDBIcon icon="users" />
                     <MDBCardTitle  ><MDBIcon icon="home" fixed /> {person.name}</MDBCardTitle>
                     <MDBCardText ><b>Username: </b>{person.username}</MDBCardText>
                     <MDBCardText><b>Email: </b>{person.email}</MDBCardText>
                     <MDBCardText><b>Address: </b>{person.address.street},{person.address.suite},{person.address.city},{person.address.zipcode},{person.address.geo.lat},{person.address.geo.lng}</MDBCardText>
                     <MDBCardText><b>Location: </b>{person.address.geo.lat},{person.address.geo.lng}</MDBCardText>
                     <MDBCardText><b>Phone: </b>{person.phone}</MDBCardText>
                     <MDBCardText><b>Website: </b>{person.website}</MDBCardText>
                     <MDBCardText><b>Company: </b>{person.company.name}, {person.company.catchPhrase}, {person.company.bs}</MDBCardText>
                   </MDBCardBody>
                 </MDBCard>
               </MDBCol>  
               </MDBRow>
               </MDBCardGroup>   


                 )}
                    
                
                </div>
           
           
        

        )
    }
}
