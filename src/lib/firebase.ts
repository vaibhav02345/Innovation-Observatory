import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // Config from the 'new rsc' project as requested.
  // The user will replace this when they create the new Firebase project.
  apiKey: "AIzaSyDdOWkFk196dvrooOgUzNDv7MSzDIlWU0E",
  authDomain: "rohitsharmaclasses-46da5.firebaseapp.com",
  projectId: "rohitsharmaclasses-46da5",
  storageBucket: "rohitsharmaclasses-46da5.firebasestorage.app",
  messagingSenderId: "735400344915",
  appId: "1:735400344915:web:d2f8ef5e67d67b276e75a6"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
