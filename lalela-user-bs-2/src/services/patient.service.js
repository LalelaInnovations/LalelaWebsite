import { 
    collection, addDoc, 
    updateDoc, doc,
    deleteDoc, getDocs,
    query
 } from "firebase/firestore";
import { firestore } from '../firebase/firestore';
import { User } from '../models/user';
import { Patient } from '../models/patient';

class PatientService {

    constructor() {
        this.collection = 'Patients';
    }

    async readPatients(user) {
        const collectionReference = collection(firestore, this.collection);
        const q = query(collectionReference, where("admin", "==", user.id));

        const querySnapshot = await getDocs(q);

        const patients = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data();

            const patient = new Patient(
                doc.admin,
                doc.email,
                doc.idNumb, 
                doc.isSA,
                doc.name,
                doc.phone,
                doc.surname
            );
            patients.push(patient);
        })
        
        return patients;
    }

}

const patientService = new PatientService();

export default patientService;