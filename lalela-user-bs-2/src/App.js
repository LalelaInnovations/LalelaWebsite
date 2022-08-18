import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBarComp from './user-dashboard/NavBarComp';

import { User } from './models/user';
// import userService from './services/user.service';

import patientService from './services/patient.service';
import testService from './services/test.service';

  const exampleUser = new User(
      "user",
      45,
      "robojcheng@gmail.com",
      "UUeFn3x4llVaeILS85wqDle4SrC2",
      "",
      "false",
      "l1",
      25,
      "A",
      "08807",
      "111111111",
      9,
      "A"
    );

    export {
      exampleUser
    }

function App() {

  // will be passed in from the login:


    const [patients, setPatients] = useState([]);

    useEffect(() => {
      fetchPatients();
    }, []);

    async function fetchPatients() {
      try {
        const patients = await patientService.readPatients(exampleUser);
        setPatients(patients);
      } catch(err) {
        console.log(err);
      }
    }

    const [userTests, setUserTests] = useState([]);

    useEffect(() => {
      fetchUserTests();
    }, []);

    async function fetchUserTests() {
      try {
        const userTests = await testService.readUserTests(exampleUser);
        setUserTests(userTests);
      } catch(err) {
        console.log(err);
      }
    }
    console.log(userTests);

  return (
    <div className="App">
      <NavBarComp user={exampleUser} patients={patients} tests={userTests}/>
    </div>
  );
}

export default App;
