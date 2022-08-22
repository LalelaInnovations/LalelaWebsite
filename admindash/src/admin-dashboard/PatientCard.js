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

    const id = props.cardPatient.id;

    const users = props.userData;

    const patientAdmin = users.map((user) => {
        return (user.id === props.cardPatient.admin ? user.surname: "")
    })


  return (

        <div>
            <Card>
            <Card.Body>
                <Card.Title><b>{name}</b></Card.Title>
                <Card.Text>
                    {/* <p>Phone: {props.phoneNum}</p> */}
                    {/* <p>email: {props.email}</p> */}
                    <p><i>Patient #{props.cardPatient.id}</i></p>
                    <p><i>Dr. {patientAdmin}</i></p>
                </Card.Text>
                {/* need to make button functional: when clicked on, record will be pulled up */}

                <PatientPopUp buttonTitle="VIEW RECORDS" patient={props.cardPatient} tests={props.tests} doctor={patientAdmin} ></PatientPopUp>


            </Card.Body>
            </Card>

            {/* <Routes>
                <Route path={"/patient"} element={<PatientInfo fullName={props.patientName} phone={props.phoneNum} email={props.email} />}/>
            </Routes> */}
        </div>

  );
}

export default PatientCard;