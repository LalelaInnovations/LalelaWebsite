import React, { useState } from 'react';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import PatientPopUp from './PatientPopUp';
import './PatientSearchBar.css'
import TestPopUp from './TestPopUp';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ScreeningData from './ScreeningData';
import DiagnosticData from './DiagnosticData';

function PatientSearchBar(props) {

    

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = props.cardPatient.filter((value) => {
            const fullName = value.name + ' ' + value.surname;
            return (
                value.name.toLowerCase().includes(searchWord.toLowerCase()) ||
                value.surname.toLowerCase().includes(searchWord.toLowerCase()) ||
                fullName.toLowerCase().includes(searchWord.toLowerCase())
            )
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    }


  return (
    <div>
        <div className="search">
            <MDBInputGroup>
            <MDBInput 
                value={wordEntered} 
                onChange={handleFilter}
                label='Search...' 
                />
            </MDBInputGroup>
        </div>

     {filteredData.length != 0 && (
        <div className="dataResult">
            {filteredData.slice(0,15).map((patient) => {
                                console.log("filtered data: " + filteredData);

                console.log("Actual cardpatient: " + patient.cardPatient);
                console.log("Actual test: " + patient.tests);

                const users = props.userData;

                const patientAdmin = users.map((user) => {
                    return (user.id === patient.admin ? user.surname: "")
                })

                console.log("patientAdmin: " + patientAdmin)

                return (
                    <div className="dataItem">
                    <p1>{patient.name + " " + patient.surname}</p1>
                    <PatientPopUp buttonTitle="VIEW RECORDS" patient={patient} tests={props.tests} doctor={patientAdmin} ></PatientPopUp>

                
                </div>
                );
            })}
        </div>
        )}
    </div>
     

  );
}

export default PatientSearchBar;