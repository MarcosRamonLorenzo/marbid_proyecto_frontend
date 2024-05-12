import {
  GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";


import { auth } from "@/firebase/firebase";
import { storage } from "@/firebase/firebase";
import { ref, uploadBytes, getDownloadURL } from "@firebase/storage";

import useAlert from "@/hooks/useAlert";

import apiUrl from "@/config/apis.config";

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
};

export const doSignOut = async () => {
  return auth.signOut();
};

export const getUserDB = async (uid) => {
  try {
    const { data } = await fetch(`${apiUrl}/user/${uid}`).then((res) =>
      res.json()
    );
    return data;
  } catch (error) {
    console.log(error);
  }
};


const uploadBackgroundImage = async (image) => {
  const backgroundStorageRef = ref(storage, `backgroundImages/${self.crypto.randomUUID()}`);
  await uploadBytes(backgroundStorageRef, image);
  return getDownloadURL(backgroundStorageRef);
};

const uploadAvatarImage = async (image) => {
  const avatarStorageRef = ref(storage, `avatars/${self.crypto.randomUUID()}`);
  await uploadBytes(avatarStorageRef, image);
  return getDownloadURL(avatarStorageRef);
};

export const updateUser = async (user, currentUser) => {
  try {
    // Subir la imagen de fondo a Firebase Storage solo si ha cambiado
    if (user.backround_img !== currentUser.backround_img) {
      const backgroundImageUrl = await uploadBackgroundImage(user.backround_img);
      console.log(backgroundImageUrl);
      user.backround_img = backgroundImageUrl;
    }
    
    // Subir la imagen de avatar a Firebase Storage solo si ha cambiado
    if (user.avatar_img !== currentUser.avatar_img) {
      const avatarImageUrl = await uploadAvatarImage(user.avatar_img);
      console.log(avatarImageUrl);
      user.avatar_img = avatarImageUrl;
    }

    // Actualizar el usuario en el backend
    const response = await fetch(`${apiUrl}/user/${user.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    return response.json();
  } catch (error) {
    console.log(error);
  }
};

export const createUser = async (user) => {
  try {
    const response = await fetch(`${apiUrl}/user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    return response.json();
  } catch (error) {
    console.log(error);
  }
};
