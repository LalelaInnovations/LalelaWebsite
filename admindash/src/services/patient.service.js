import { 
    collection, addDoc, 
    updateDoc, doc,
    deleteDoc, getDocs,
    query, where
 } from "firebase/firestore";
import { firestore } from '../firebase/firebase';
import { User } from '../models/user';
import { Patient } from '../models/patient';

class PatientService {

    constructor() {
        this.collection = 'Patients';
    }

    async readPatients() {
        const collectionReference = collection(firestore, this.collection);
        const q = query(collectionReference);

        const querySnapshot = await getDocs(q);

        const patients = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data();

            const patient = new Patient(
                doc.id, 
                data.admin,
                data.email,
                data.idNumb, 
                data.isSA,
                data.name,
                data.phone,
                data.surname
            );

            patients.push(patient);


        });

        return patients;
    }

    async readUserPatients(user) {
        const collectionReference = collection(firestore, this.collection);
        const q = query(collectionReference, where("admin", "==", user.id));

        const querySnapshot = await getDocs(q);

        const patients = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data();

            const patient = new Patient(
                doc.id, 
                data.admin,
                data.email,
                data.idNumb, 
                data.isSA,
                data.name,
                data.phone,
                data.surname
            );
            console.log(patient);
            patients.push(patient);
        });
        
        return patients;
    }

}

const patientService = new PatientService();

export default patientService;