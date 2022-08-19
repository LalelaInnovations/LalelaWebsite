import React, {useState} from 'react'
import Container from 'react-bootstrap/Container';
import ScreeningData from './ScreeningData';
import DiagnosticData from './DiagnosticData';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleBar from './ToggleBar';
import TestTable from './TestTable';
import TestPopUp from './TestPopUp';
import Table from 'react-bootstrap/esm/Table';

function TestResults(props) {

  const tests = props.testData;
  const patients = props.patientData;
  const users = props.userData;
  const [newData, setNewData] = useState(tests)
  const [newFilter, setNewFilter] = useState("all tests")


  function onFilterSelected(filterValue){
    setNewFilter(filterValue);

  

    if (filterValue === "all tests") {
      const filter = tests;
      setNewData(tests);

    }


     else if (filterValue === "screen test") {
      const filter = tests.filter((test) => {
        return (test.testType === "Screening Test")
      })
      setNewData(filter);



    }
  
    else if (filterValue === "diagnostic test") {
      const filter = tests.filter((test) => {
        return (test.testType === "Diagnostic Test")
    })
    setNewData(filter);

    }


    else {

        const filter = tests.filter((test) => {
        const allDates = test.date.month + "/" + test.date.day + "/" + test.date.year;

          return (allDates == filterValue)
        })

        setNewData(filter);

      
    }

}
  
  return (
    <div>
      <Container className="mt-3 mb-5">
        <Row>
          <Col><h1>Tests</h1></Col>
          <Col><ToggleBar filterValueSelected={onFilterSelected} filterBy="all tests"/></Col>

          <Col><ToggleBar filterValueSelected={onFilterSelected} filterBy="date"/></Col>

          <Col><ToggleBar filterValueSelected={onFilterSelected} filterBy="test type"/></Col>
        </Row>
      </Container>
      <Container>
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
                    newData.map((test) => {
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
      </Container>
    </div>
  )
}

export default TestResults