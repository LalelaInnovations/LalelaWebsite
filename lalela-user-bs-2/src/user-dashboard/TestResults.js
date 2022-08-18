import React, {useState} from 'react'
import PatientData from './FakePatientData.json';
import TestData from './FakeTestData.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ToggleBar from './ToggleBar';
import TestTable from './TestTable';
import TestPopUp from './TestPopUp';
import Table from 'react-bootstrap/esm/Table';

function TestResults(props) {
  
  const [newFilter, setNewFilter] = useState("all tests")
  const [newData, setNewData] = useState(TestData)
  // const [newPatients, setNewPatients] = useState({PatientData})
  const [filterDate, setFilterDate] = useState("")


  function onFilterSelected(filterValue){
    setNewFilter(filterValue);
    console.log(filterValue);
    updateData();
  

     
  function updateData(){

    if (filterValue === "all tests") {
      const filter = TestData;
      setNewData(TestData);
      console.log(newData)
    }


     else if (filterValue === "screen test") {
      const filter = TestData.filter((test) => {
        return (test.testType === "Screening Test")
      })
      setNewData(filter);
      console.log(newData)


    }
  
    else if (filterValue === "diagnostic test") {
      const filter = TestData.filter((test) => {
        return (test.testType === "Diagnostic Test")
    })
    setNewData(filter);
    console.log(newData)
    }


    else {
      console.log("date?" + filterValue)
        
        const filter = TestData.filter((test) => {
          const allDates = test.date.map((date) => 
                            (date.month + "/" + date.day + "/" + date.year));
          // console.log(allDates)
          return (allDates == filterValue)
        })
        console.log(filter)
        setNewData(filter);
        console.log(newData)
      }
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
        {/* <TestTable tests={newData} patients={PatientData}/> */}
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
                    newData.map((test) => {

                        const type = test.testType;
                        const name = PatientData.map((patient) => 
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
      </Container>
    </div>
    )
}

export default TestResults