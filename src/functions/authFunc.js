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

import apiUrl from "@/config/apis.config";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
  });
  const result = await signInWithPopup(auth, provider);
  return result;
};

export const doSignInWithGitHub = async () => {
  const provider = new GithubAuthProvider();
  provider.addScope("user:email");
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
  const backgroundStorageRef = ref(
    storage,
    `backgroundImages/${self.crypto.randomUUID()}`
  );
  await uploadBytes(backgroundStorageRef, image);
  return getDownloadURL(backgroundStorageRef);
};

const uploadAvatarImage = async (image) => {
  const avatarStorageRef = ref(storage, `avatars/${self.crypto.randomUUID()}`);
  await uploadBytes(avatarStorageRef, image);
  return getDownloadURL(avatarStorageRef);
};

export const updateUser = async (user, currentUser) => {
  // Subir la imagen de fondo a Firebase Storage solo si ha cambiado
  if (user.backround_img !== currentUser.backround_img) {
    const backgroundImageUrl = await uploadBackgroundImage(user.backround_img);
    user.backround_img = backgroundImageUrl;
  }

  // Subir la imagen de avatar a Firebase Storage solo si ha cambiado
  if (user.avatar_img !== currentUser.avatar_img) {
    const avatarImageUrl = await uploadAvatarImage(user.avatar_img);
    user.avatar_img = avatarImageUrl;
  }

  // Actualizar el usuario en el backend
  const response = await fetch(`${apiUrl}/user/${user.id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  return response.json();
};

export const createUser = async (user) => {
  const response = await fetch(`${apiUrl}/user`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  return response.json();
};

const emailValidFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateFormUser = (formUser) => {
  if (formUser.email.length < 1) {
    return "Rellena el campo de email";
  } else if (!emailValidFormat.test(formUser.email)) {
    return "El email no es correcto";
  } else if (formUser.password.length < 1) {
    return "Rellena el campo de contraseña";
  } else if (
    formUser.register &&
    (formUser.repeatPassword == null || formUser.repeatPassword.length < 1)
  ) {
    return "Rellena el campo de contraseña auxiliar";
  } else if (
    formUser.register &&
    formUser.password !== formUser.repeatPassword
  ) {
    return "Las contraseñas no coinciden";
  }
  return null;
};

export const validateEditedUser = (user) => {
  if (!user.id) {
    return "El ID es requerido";
  }

  if (!user.name || user.name.length > 100) {
    return "El nombre es requerido y no puede tener más de 100 caracteres";
  }

  if (!user.label || user.label.length > 100) {
    return "La etiqueta es requerida y no puede tener más de 100 caracteres";
  }

  if (!user.description || user.description.length > 500) {
    return "La descripción es requerida y no puede tener más de 500 caracteres";
  }

  if (!user.country || user.country.length > 50) {
    return "El país es requerido y no puede tener más de 50 caracteres";
  }

  if (!user.avatar_img) {
    return "La imagen de avatar es requerida";
  }

  if (!user.backround_img) {
    return "La imagen de fondo es requerida";
  }

  return null;
};
