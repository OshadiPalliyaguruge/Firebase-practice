// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage,ref } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6nc0C6uUKDaXhA1mfZgIEerKTp7NPG8Y",
  authDomain: "image-upload-92890.firebaseapp.com",
  projectId: "image-upload-92890",
  storageBucket: "image-upload-92890.appspot.com",
  messagingSenderId: "535118536698",
  appId: "1:535118536698:web:989a81c3fdfc0c5ef30e43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage=getStorage();
const storageRef=ref(storage);

const imagesRef=ref(storage,'images');
const sparkyRef=ref(storage,'images/sparky.jpg');

uploadBytes(sparkyRef,file).then((snapshot)=>{
console.log('uploaded a blob or file!');

});
uploadBytes();

