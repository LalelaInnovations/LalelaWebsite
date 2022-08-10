import React, { useState } from 'react';
import { MDBInputGroup, MDBInput, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';

function PatientSearchBar({ data }) {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

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
            <MDBBtn color="dark" rippleColor='dark' >
                <MDBIcon icon='search' />
            </MDBBtn>
            </MDBInputGroup>
        </div>

        <div className="dataResult">
            {filteredData.slice(0,15).map((value, key) => {
                return (
                    // need to make it so that if a result is clicked on, that card will be shown
                    <a className="dataItem" href={value.link} target="_blank">
                        <p>{value.name + ' ' + value.surname}</p>
                    </a>
                );
            })}
        </div>
    </div>

  );
}

export default PatientSearchBar;