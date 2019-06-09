import * as firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCxsAvUyVdW5ElmOe4btrthiAbJ0Ll_nvE",
    authDomain: "banking-862bb.firebaseapp.com",
    databaseURL: "https://banking-862bb.firebaseio.com",
    projectId: "banking-862bb",
    storageBucket: "banking-862bb.appspot.com",
    messagingSenderId: "300062451200",
    appId: "1:300062451200:web:987d5def3dc8d4b6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.database();


function getRealtimeTodo() {
    return new Promise((resolve, reject) => {
        // db.collection('todo').get().then(snapshot => {
        db.collection('todo').onSnapshot(snapshot => {
            const temp = [];

            snapshot.forEach(doc => {
                const obj = {id: doc.id, ...doc.data()}
                temp.push(obj);
            })
            console.log('getRealtimeTodo ===>', temp);
            resolve(temp);
        })
    })
}

export default firebase;
export {
    getRealtimeTodo
}