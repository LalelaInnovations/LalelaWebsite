import React, { useState } from 'react';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import PatientPopUp from './PatientPopUp';
import './PatientSearchBar.css'
import TestPopUp from './TestPopUp';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import testData from './FakeTestData.json';
import PatientData from './FakePatientData.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ScreeningData from './ScreeningData';
import DiagnosticData from './DiagnosticData';


function PatientSearchBar( {data} ) {

    

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const [ show, setShow ] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
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


    

    

    // const clearInput = () => {
    //     setFilteredData([]);
    //     setWordEntered("");
    // }

  return (
    
    <div>
        <div className="search">
            <MDBInputGroup>
            <MDBInput 
                value={wordEntered} 
                onChange={handleFilter}
                label='Search by patient...' 
                />

            </MDBInputGroup>

        </div>

        {filteredData.length != 0 && (
        <div className="dataResult" >
            {filteredData.slice(0,15).map((value, key) => {
                    
                return (
                    
                    // need to make it so that if a result is clicked on, that card will be shown
                    <div className="dataItem">
                    
                        


                        <p1>{value.name + " " + value.surname}</p1>




                        <PatientPopUp patientName={value.name + " " + value.surname} patientPhone={value.phone} patientEmail={value.email} patientID={value.patient}></PatientPopUp>
                    
                    </div>
                    
                );
            })}
        </div>
        )}
        
    </div>

  );
}

export default PatientSearchBar;
