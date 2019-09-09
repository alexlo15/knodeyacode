// // YOUR FIREBASE METHODS AND CONFIG GOES HERE

import app from 'firebase/app';
import 'firebase/database';
import "firebase/auth";

// YOU DEFINE THESE
const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.db = app.database();
        this.auth = app.auth();
    }

    //DEFINE YOU FIREBASE METHODS HERE
    //THESE METHODS WILL BE AVAILABLE AS PROPS
    // ex: ref your db
    createUser = (email, password) => {
        return this.auth.createUserWithEmailAndPassword(email, password)
    }

    signInUser = (email, password) => {
       return this.auth.signInWithEmailAndPassword(email, password)
    }
    //built in firebase methods from auth

    
    doSignOutUser = () => this.auth.signOut();
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
    doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

    //match the location where users are stored based on their uid
    user = uid => this.db.ref(`users/${uid}`);
    //ref to the users db
    users = () => this.db.ref('users');
}


export default Firebase;
