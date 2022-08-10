import React from 'react';
import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
import TestPopUp from './TestPopUp';

export default function TestTable(props) {
  return (
    <div>
        <Table striped bordered hover variant="light">
            <thead>
                <tr>
                    <th></th>
                    <th>Test Date</th>
                    <th>Patient</th>
                    <th>Test Type</th>
                </tr>
            </thead>
            <tbody>

                {
                    props.tests.map((test) => {

                        const type = test.testType;
                        const name = props.patients.map((patient) => 
                            (patient.patient === test.patientID ? patient.name + " " + patient.surname : ""));
                        const feedback = test.feedback;
                        const testData = (test.testType === "Screening Test" ? test.heard : test.patientTestData);
                        const date = test.date.map((date) => 
                            (date.month + "/" + date.day + "/" + date.year));

                        return (<tr>
                            <td><TestPopUp 
                                buttonTitle="OPEN"
                                testType={type}
                                patientName={name}
                                testFeedback={feedback}
                                testDate={date}
                                testData={testData}
                                >
                            </TestPopUp></td>
                            <td>{date}</td>                       
                            <td>{name}</td>
                            <td>{type}</td>
                                
                            
                            
                        </tr>)
                    }
                        
                    )}
                

            </tbody>

        </Table>
    </div>
  )
}
