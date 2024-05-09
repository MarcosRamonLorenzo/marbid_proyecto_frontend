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
import { ref, uploadBytesResumable, getDownloadURL } from "@firebase/storage";


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

export const updateUser = async (user, currentUser) => {
  try {
    console.log({user, currentUser});
    // Subir la imagen de fondo a Firebase Storage solo si ha cambiado
    if (user.backround_img !== currentUser.backround_img) {
      const backgroundStorageRef = ref(storage, 'backgroundImages/' + user.backround_img);
      const backgroundUploadTask = uploadBytesResumable(backgroundStorageRef, user.backround_img);

      backgroundUploadTask.on('state_changed', 
        (snapshot) => {
          // Progreso de la subida
        }, 
        (error) => {
          // Manejar error
        }, 
        async () => {
          // Subida completada
          const backgroundDownloadURL = await getDownloadURL(backgroundUploadTask.snapshot.ref);
          user.backround_img = backgroundDownloadURL;
        }
      );
    }

    // Subir la imagen de avatar a Firebase Storage solo si ha cambiado
    if (user.avatar_img !== currentUser.avatar_img) {
      const avatarStorageRef = ref(storage, 'avatars/' + user.avatar_img);
      const avatarUploadTask = uploadBytesResumable(avatarStorageRef, user.avatar_img);

      avatarUploadTask.on('state_changed', 
        (snapshot) => {
          // Progreso de la subida
        }, 
        (error) => {
          // Manejar error
        }, 
        async () => {
          // Subida completada
          const avatarDownloadURL = await getDownloadURL(avatarUploadTask.snapshot.ref);
          user.avatar_img = avatarDownloadURL;
        }
      );
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
