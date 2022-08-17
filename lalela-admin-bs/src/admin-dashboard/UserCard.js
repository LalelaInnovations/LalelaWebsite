import React from 'react'
import Card from 'react-bootstrap/Card';
import UserPopUp from './UserPopUp';

function UserCard(props) {

    const name = "Dr. " + props.user.name + " " + props.user.surname;
    const id = props.user.id;
    

  return (
    <div>
        <Card>
        <Card.Body>
            <Card.Title><b>{name}</b></Card.Title>
            <Card.Text>User #{id}</Card.Text>

            <UserPopUp user={props.user} patients={props.patients} tests={props.tests}></UserPopUp>
        </Card.Body>
        </Card>
    </div>
  )
}

export default UserCard