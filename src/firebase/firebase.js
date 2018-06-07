import * as firebase from 'firebase';
/*
class Firebase {
  static init(){
    firebase.initializeApp({
        apiKey: "AIzaSyB5vbLi3hu8x-y1kr0onpvV8CbFbfUKE0g",
        authDomain: "moving-free.firebaseapp.com",
        databaseURL: "https://moving-free.firebaseio.com",
        projectId: "moving-free",
        storageBucket: "moving-free.appspot.com", 
    })
  }
}
*/

firebase.initializeApp({
  apiKey: "AIzaSyB5vbLi3hu8x-y1kr0onpvV8CbFbfUKE0g",
  authDomain: "moving-free.firebaseapp.com",
  databaseURL: "https://moving-free.firebaseio.com",
  projectId: "moving-free",
  storageBucket: "moving-free.appspot.com",
  messagingSenderId: "467049164271" 
})

module.exports = firebase;