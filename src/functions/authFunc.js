import {
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "@/firebase/firebase";


import apiUrl from "@/config/apis.config"

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result;
};

export const doSignInWithGitHub = async () => {
  const provider = new GithubAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result;
};

export const doSignInWithTwitter = async () => {
  const provider = new TwitterAuthProvider();
  const result = await signInWithPopup(auth, provider);
  return result;
}

export const doSignOut = async () => {
  return auth.signOut();
};

export const getUser = async (uid) => {
  try {
    const {data} = await fetch(`${apiUrl}/user/${uid}`).then((res) => res.json());
    return data;

  } catch (error) {
    
    console.log(error);
  }
};

export const createUser = async (user) => {
  try {
    const response = await fetch(`${apiUrl}/user`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(user),
    });

    return response.json();
  } catch (error) {
    console.log(error);
  }
  
};

