import firebase from 'firebase';

// import firebase from 'firebase/app';
// import 'firebase/<PACKAGE>';

const config={
    // apiKey: "AIzaSyBxsOgB2-qBaj-gzaQt9HeV2OzUDF5TBe4",
    // authDomain: "insta-pages.firebaseapp.com",
    // databaseURL: "https://insta-pages.firebaseio.com",
    // projectId: "insta-pages",
    // storageBucket: "insta-pages.appspot.com",
    // messagingSenderId: "762208855552",
    // appId: "1:762208855552:web:a0f4e22db5ac562f815ae5",
    // measurementId: "G-D45NP7BX4K"
    apiKey:" AIzaSyBQcZP0EhyQO0Tyo3613j1YMG2l5I6dCvM",
    databaseURL:"https://localrouting.firebaseio.com/",
    projectId:"localrouting"
};

firebase.initializeApp(config);

export default firebase;