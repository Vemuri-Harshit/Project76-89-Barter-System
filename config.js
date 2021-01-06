import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAOBNp0GZ4jwSte_KcfvwjF3LdYBuvF-xU",
  authDomain: "barter-system-895d6.firebaseapp.com",
  projectId: "barter-system-895d6",
  storageBucket: "barter-system-895d6.appspot.com",
  messagingSenderId: "245913989769",
  appId: "1:245913989769:web:3fffc528915bbff4788c58"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();