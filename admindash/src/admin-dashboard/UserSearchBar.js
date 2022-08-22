import React, {useState} from 'react'
import UserPopUp from './UserPopUp';
import SearchBar from './SearchBar.css'
import { MDBInputGroup, MDBInput } from 'mdb-react-ui-kit';

function UserSearchBar(props) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = props.user.filter((value) => {
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
            {filteredData.slice(0,15).map((user) => {

                const users = props.userData;


                // console.log("patientAdmin: " + patientAdmin)

                return (
                    <div className="dataItem">
                    <p1>{user.name + " " + user.surname}</p1>
                    <UserPopUp user = {user} patients={props.patients} tests={props.tests}  ></UserPopUp>

                
                </div>
                );
            })}
        </div>
        )}
    </div>
     

  );
}

export default UserSearchBar;
