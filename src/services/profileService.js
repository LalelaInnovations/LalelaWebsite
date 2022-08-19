 import { doc, getDoc, setDoc, addDoc } from "firebase/firestore";
 import { firestore } from "../firebase/firebase";
 import { Profile } from "../common/profile";

 class ProfileService {
   constructor() {
     this.collection = 'Users';
   }

  async readProfile(user) {
    const docRef = doc(firestore, this.collection, user.uid);
    const docSnapshot = await getDoc(docRef);

    if (docSnapshot.exists()) {
      return Profile.fromFirebase(docSnapshot);
      //   const data = docSnapshot.data();
      // const profile = new Profile({
      //   id: docSnapshot.id,
      //   name: data.name,
      //   surname: data.surname,
      //   idNumb: data.idNumb,
      //   email: data.email,
      //   passcode: data.passcode,
      //   language: data.language,
      //   isSA: data.isSA,
      //   phone: data.phone,
      // });
      // return profile;
    }
    return null;
  }

  async saveProfile(profile) {
   const docRef = doc(firestore,'Users', profile.id);
  console.log(profile);
  console.log(docRef);

    await setDoc(docRef, {
      id: profile.id,
      name: profile.name,
      surname: profile.surname,
      idNumb: profile.idNumb,
      language: profile.language,
      email: profile.email,
      passcode: profile.passcode,
      isSA: profile.isSA,
      phoneNumber: profile.phone,
  })

    console.log(profile);

    return profile;
  }

    } 

 const service = new ProfileService();


 export default service;
