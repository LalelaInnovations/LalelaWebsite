import React from 'react';

import PatientPopUp from './PatientPopUp'

import Card from 'react-bootstrap/Card';


// import {
//     Routes,
//     Route,
//     Link
//   } from "react-router-dom";

function PatientCard(props) {

    const name = props.cardPatient.name + " " + props.cardPatient.surname;
    const email = props.cardPatient.email;
    const phone = props.cardPatient.phone;
    const id = props.cardPatient.id;

  return (

        <div>
            <Card>
            <Card.Body>
                <Card.Title><b>{name}</b></Card.Title>
                <Card.Text>
                    {/* <p>Phone: {props.phoneNum}</p> */}
                    {/* <p>email: {props.email}</p> */}
                    <p><i><b>Patient #{id}</b></i></p>
                </Card.Text>
                {/* need to make button functional: when clicked on, record will be pulled up */}

                <PatientPopUp patient={props.cardPatient} tests={props.tests}></PatientPopUp>


            </Card.Body>
            </Card>

            {/* <Routes>
                <Route path={"/patient"} element={<PatientInfo fullName={props.patientName} phone={props.phoneNum} email={props.email} />}/>
            </Routes> */}
        </div>

  );
}

export default PatientCard;