import React from 'react';
import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
import TestPopUp from './TestPopUp';

export default function TestTable(props) {
    const tests = props.tests;
    const patients = props.patients;
    const users = props.users;

  return (
    <div>
        <Table striped bordered hover variant="light">
            <thead>
                <tr>
                    <th></th>
                    <th>Doctor</th>
                    <th>Test Date</th>
                    <th>Patient</th>
                    <th>Test Type</th>
                </tr>
            </thead>
            <tbody>

                {
                    tests.map((test) => {
                        const testInput = [
                            test.id,
                            test.adminID,
                            test.date,
                            test.feedback,
                            test.patientTestData,
                            test.testType,
                            test.heard,
                            test.kHzArr,
                            test.passed,
                            test.patientID
                        ];
                        // const adminID = test.adminID;
                        const doctor = users.map((user) => 
                            (test.adminID === user.id ? user.surname : ""));
                        const date = test.date.month + "/" + test.date.day + "/" + test.date.year;
                        const name = patients.map((patient) =>
                            (patient.id === test.patientID ? patient.name + " " + patient.surname : ""));
                        const patientId = patients.map((patient) => 
                            (patient.id === test.patientID ? patient.id : "" ));
                        



                        // const name = "name";
                        const type = test.testType;

                        return (<tr>
                            <td><TestPopUp 
                                buttonTitle="OPEN" 
                                patientName={name}
                                date={date} 
                                testType={test.testType}
                                testFeedback={test.feedback}
                                testAudiogram={test.patientTestData}
                                testkHzArr={test.kHzArr}
                                testPassed={test.passed}
                                testHeard={test.heard}
                                testId={test.id}
                                testDoctor={doctor}
                                testAdminId={test.adminID}
                                patientID={test.patientID}
                                >
                            </TestPopUp></td>
                            <td>{doctor}</td>
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