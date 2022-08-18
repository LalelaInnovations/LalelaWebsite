import React, { useState } from 'react';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import PatientPopUp from './PatientPopUp';



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
        console.log(newFilter);


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
        <div className="dataResult">
            {filteredData.slice(0,15).map((value, key) => {
                    
                return (
                    
                    // need to make it so that if a result is clicked on, that card will be shown
                    <a className="dataItem">
                    
                        


                        <p1>{value.name + " " + value.surname}</p1>

                         <PatientPopUp 
                            patientName={value.name + " " + value.surname} 
                            patientPhone={value.phone} patientEmail={value.email} 
                            patientID={value.patient}> 

                        </PatientPopUp>
                    
                    </a>
                    
                );
            })}
        </div>
        )}
        
    </div>

  );
}

export default PatientSearchBar;
