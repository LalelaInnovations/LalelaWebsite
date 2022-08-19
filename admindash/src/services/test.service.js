import {
    collection, addDoc,
    updateDoc, doc, 
    deleteDoc, getDocs, query, where
} from "firebase/firestore";
import { firestore } from '../firebase/firebase';
import { TestResult } from "../models/testResult";

class TestService {

    constructor() {
        this.collection = 'TestResults';
    }

    async readTests() {
        const collectionReference = collection(firestore, this.collection);
        const q = query(collectionReference);

        const querySnapshot = await getDocs(q);

        const tests = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data();

            const test = new TestResult(
                doc.id,
                data.adminID,
                data.date,
                data.feedback,
                data.patientTestData,
                data.testType,
                data.heard,
                data.kHzArr,
                data.passed,
                data.patientID
            );
            tests.push(test);
        });

        return tests;
    }

    async readUserTests(user) {
        const collectionReference = collection(firestore, this.collection);
        const q = query(collectionReference, where("adminID", "==", user.id));

        const querySnapshot = await getDocs(q);

        const tests = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data();

            const test = new TestResult(
                doc.id,
                data.adminID,
                data.date,
                data.feedback,
                data.patientTestData,
                data.testType,
                data.heard,
                data.kHzArr,
                data.passed,
                data.patientID
            );
            tests.push(test);
        });

        return tests;
    }

    async readPatientTests(patient, user) {
        const collectionReference = collection(firestore, this.collection);
        const q = query(collectionReference, where(("patientID", "==", patient) && ("adminID", "==", user.id)));

        const tests = [];

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            const data = doc.data();

            const test = new TestResult(
                doc.id,
                data.adminID,
                data.date,
                data.feedback,
                data.patientTestData, 
                data.testType,
                data.heard,
                data.kHzArr,
                data.passed,
                data.patientID
            );
            tests.push(test);

        });

        return tests;
    }
}

const testService = new TestService();

export default testService;