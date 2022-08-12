import {
    collection, addDoc,
    updateDoc, doc, 
    deleteDoc, getDocs, query, QuerySnapshot
} from "firebase/firestore";
import { firestore } from '../firebase/firebase';
import { TestResult } from "../models/testResult";

class TestService {

    constructor() {
        this.collection = 'TestResults';
    }

    async readUserTests(user) {
        const collectionReference = collection(firestore, this.collection);
        const q = query(collectionReference, where("adminID", "==", user.id));

        const tests = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data();

            const test = new TestResult(
                doc.adminID,
                doc.date,
                doc.feedback,
                doc.patientTestData,
                doc.testType,
                doc.heard,
                doc.kHzArr,
                doc.passed,
                doc.patientID
            );
            tests.push(test);
        });

        return tests;
    }

    async readPatientTests(patient, user) {
        const collectionReference = collection(firestore, this.collection);
        const q = query(collectionReference, where(("patientID", "==", patient) && ("adminID", "==", user.id)));

        const tests = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data();

            const test = new TestResult(
                doc.adminID,
                doc.date,
                doc.feedback,
                doc.patientTestData, 
                doc.testType,
                doc.heard,
                doc.kHzArr,
                doc.passed,
                doc.patientID
            );
            tests.push(test);

        });

        return tests;
    }
}

const testService = new TestService();

export default testService;