import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyDRMlTjwIbVQP72ZAyvUr5v6P4Uh3ZL-OY",
        authDomain: "todo-app-24650.firebaseapp.com",
        databaseURL: "https://todo-app.firebaseio.com",
        projectId: "todo-app-24650",
        storageBucket: "todo-app-24650.appspot.com",
        messagingSenderId: "868511197819",
        appId: "1:868511197819:web:1aa279d96b8df72fb110de",
        measurementId: "G-19MC3F2EZY"
});

const db = firebaseApp.filestore();

export default db;