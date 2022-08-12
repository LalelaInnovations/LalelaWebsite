import { 
    collection, addDoc, 
    updateDoc, doc,
    deleteDoc, getDocs,
    query
 } from "firebase/firestore";
import { firestore } from '../firebase/firestore';
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
                doc.accounttype,
                doc.email, 
                doc.id,
                doc.idNumb,
                doc.isSA,
                doc.langauge,
                doc.name,
                doc.passcode,
                doc.phone,
                doc.surname
            );
            users.push(user);
        })
        
        return users;
    }

}

const userService = new UserService();

export default userService;