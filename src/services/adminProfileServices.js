
import { doc, getDoc, setDoc } from "firebase/firestore";
 import { firestore } from "../firebase/firebase";
 import { adminProfile } from "../common/adminProfile"

class adminProfileServices {
    constructor() {
        this.collection = 'adminProfiles';
      }
   
     async readProfile(user) {
       const docRef = doc(firestore, this.collection, user.uid);
       const docSnapshot = await getDoc(docRef);
   
       if (docSnapshot.exists()) {
         return adminProfile.fromFirebase(docSnapshot);
        
       }
       return null;
     }
   
     async saveProfile(profile) {
      const docRef = doc(firestore, 'adminProfiles', profile.id)
       console.log(profile)
       console.log(docRef)
   
         await setDoc(docRef, {
           id: profile.id,
           name:profile.name,
           surname:profile.surname,
           idNumber:profile.idNumber,
           location:profile.location,
           email:profile.email,
           password:profile.password,
           cellphoneNumber:profile.cellphoneNumber,
       })
     
         console.log(profile);
     
         return profile;
       }
   
        } 
   
    const service = new adminProfileServices();
    export default service;
   


