import { initializeApp, getApps } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, User } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCqJrpTj9zz0rStG_iEbhoZ0MxJY7K6K74",
  authDomain: "avatar-2fc52.firebaseapp.com",
  projectId: "avatar-2fc52",
  storageBucket: "avatar-2fc52.firebasestorage.app",
  messagingSenderId: "728272062054",
  appId: "1:728272062054:web:a5ae39b5805c3c2f73cfa7",
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export async function signInWithGoogle(): Promise<User> {
  const result = await signInWithPopup(auth, googleProvider);
  return result.user;
}

export async function logout(): Promise<void> {
  await signOut(auth);
}

export function onAuthChange(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}

export type { User };
