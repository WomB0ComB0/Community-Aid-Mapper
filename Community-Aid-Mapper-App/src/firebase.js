import {initializeApp} from "firebase/app";
import { getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.VITE_COMMUNITY_AID_PROVIDER_APP_FIREBASE_API_KEY,
  authDomain: process.env.VITE_COMMUNITY_AID_PROVIDER_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VITE_COMMUNITY_AID_PROVIDER_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VITE_COMMUNITY_AID_PROVIDER_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_COMMUNITY_AID_PROVIDER_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_COMMUNITY_AID_PROVIDER_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_COMMUNITY_AID_PROVIDER_APP_FIREBASE_APP_ID,
  measurementId: process.env.VITE_COMMUNITY_AID_PROVIDER_APP_FIREBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();