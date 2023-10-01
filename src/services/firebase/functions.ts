import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { getDatabase, set, ref, get, update } from 'firebase/database';
import { FIREBASE_AUTH, FIREBASE_APP } from './config';

export const setDataToRealTimeDatabase = async (path: string, data: any) => {
  const db = getDatabase(FIREBASE_APP);
  const reference = ref(db, path);
  return set(reference, data);
};

export const updateDataToRealTimeDatabase = async (updates: any) => {
  const db = getDatabase(FIREBASE_APP);
  const reference = ref(db);
  return update(reference, updates);
};

export const loadDataFromRealTimeDatabase = async (path: string) => {
  const db = getDatabase(FIREBASE_APP);
  const reference = ref(db, path);
  return get(reference);
};

export const signInFirebase = (email: string, password: string) => {
  const auth = FIREBASE_AUTH;
  return signInWithEmailAndPassword(auth, email, password);
};

export const signUpFirebase = (email: string, password: string) => {
  const auth = FIREBASE_AUTH;
  return createUserWithEmailAndPassword(auth, email, password);
};
