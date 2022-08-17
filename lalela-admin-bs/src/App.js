import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBarComp from './admin-dashboard/NavBarComp';

import userService from './services/user.service';

import patientService from './services/patient.service';
import testService from './services/test.service';

import { Admin } from './models/admin';

  const exampleAdmin = new Admin(
    0,
    "0784820256",
    "j.leroux@icloud.com",
    "",
    "125891",
    false,
    "",
    "8802055039086",
    "",
    "Jean-Pierre",
    "Fckgwrhqq2",
    "leRoux"
  )

  export {
    exampleAdmin
  }

function App() {

  // will be passed in from the login:

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const users = await userService.readUsers(exampleAdmin);
      setUsers(users);
    } catch(err) {
      console.log(err);
    }
  }


    const [patients, setPatients] = useState([]);

    useEffect(() => {
      fetchPatients();
    }, []);

    async function fetchPatients() {
      try {
        const patients = await patientService.readPatients();
        setPatients(patients);
      } catch(err) {
        console.log(err);
      }
    }

    const [userTests, setUserTests] = useState([]);

    useEffect(() => {
      fetchTests();
    }, []);

    async function fetchTests() {
      try {
        const userTests = await testService.readTests();
        setUserTests(userTests);
      } catch(err) {
        console.log(err);
      }
    }
    console.log(userTests);

  return (
    <div className="App">
      <NavBarComp admin={exampleAdmin} users={users} patients={patients} tests={userTests}/>
    </div>
  );
}

export default App;

