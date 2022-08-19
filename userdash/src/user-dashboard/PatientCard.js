import React from 'react';

import PatientPopUp from './PatientPopUp'

import Card from 'react-bootstrap/Card';


// import {
//     Routes,
//     Route,
//     Link
//   } from "react-router-dom";

function PatientCard(props) {


    const name = props.patientName;
    const email = props.email;
    const phone = props.phoneNum;
    const id = props.id;
    

    // const name = props.cardPatient.name + " " + props.cardPatient.surname;
    // const email = props.cardPatient.email;
    // const phone = props.cardPatient.phone;
    // const id = props.cardPatient.id;


  return (

        <div>
            <Card>
            <Card.Body>
                <Card.Title><b>{name}</b></Card.Title>
                <Card.Text>
                    <p1>Patient ID: {id} </p1> <br/>
                    <p2> Patient Email: {email} </p2>

                </Card.Text>
                {/* need to make button functional: when clicked on, record will be pulled up */}

                <PatientPopUp patientName={name} patientPhone={phone} patientEmail={email} patientID={id}></PatientPopUp>


            </Card.Body>
            </Card>

            {/* <Routes>
                <Route path={"/patient"} element={<PatientInfo fullName={props.patientName} phone={props.phoneNum} email={props.email} />}/>
            </Routes> */}
        </div>

  );
}

export default PatientCard;