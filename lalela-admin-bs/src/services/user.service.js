import { 
    collection, addDoc, 
    updateDoc, doc,
    deleteDoc, getDocs,
    query
 } from "firebase/firestore";
import { firestore } from '../firebase/firebase';
import { User } from '../models/user';

class UserService {

    constructor() {
        this.collection = 'Users';
    }

    async readUsers() {
        const collectionReference = collection(firestore, this.collection);
        const q = query(collectionReference);

        const querySnapshot = await getDocs(q);

        const users = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data();

            const user = new User(
                data.accounttype,
                data.diagnosticCredits,
                data.email, 
                data.id,
                data.idNumb,
                data.isSA,
                data.langauge,
                data.lastPaymentID,
                data.name,
                data.passcode,
                data.phone,
                data.screeningCredits,
                data.surname
            );
            users.push(user);
        })
        
        return users;
    }

}

const userService = new UserService();

export default userService;