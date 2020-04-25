import firebase from 'firebase';

class FireService {
  constructor() {
    this.init();
  }

  init = () => {
    try {
      firebase.initializeApp({
        apiKey: "AIzaSyBr4UqHBBTl4lIrHIhvwjucRzbSdkug0Zw",
        authDomain: "online-tic-tac-toe-51195.firebaseapp.com",
        databaseURL: "https://online-tic-tac-toe-51195.firebaseio.com",
        projectId: "online-tic-tac-toe-51195",
        storageBucket: "online-tic-tac-toe-51195.appspot.com",
        messagingSenderId: "1060489016860",
        appId: "1:1060489016860:web:3f944a7178637271eb51d9",
        measurementId: "G-N38P84G2JZ"
      });
    } catch (err) {
      // we skip the "already exists" message which is
      // not an actual error when we're hot-reloading
      if (!/already exists/.test(err.message)) {
        console.error('Firebase initialization error', err.stack)
      }
    }
  }
}

FireService = new FireService();
export default FireService;
