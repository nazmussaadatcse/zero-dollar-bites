// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDHsvzyBMlwe1A5BYd7FLeBt6I2BzZMOi0",
//   authDomain: "zero-dollar-bites.firebaseapp.com",
//   projectId: "zero-dollar-bites",
//   storageBucket: "zero-dollar-bites.appspot.com",
//   messagingSenderId: "17022929787",
//   appId: "1:17022929787:web:5bd23f6b0bc0f127038bde"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export default app;

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

const app = initializeApp(firebaseConfig);

export default app;
