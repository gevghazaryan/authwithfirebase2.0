import { auth } from './firebase';

export const singUpWithEmailAndPassword = (email,password) =>
    auth.createUserWithEmailAndPassword(email,password)

export const signInWithEmailAndPassword = (email, password) => 
    auth.signInWithEmailAndPassword(email, password)

export const passwordReset = (email) =>
    auth.sendPasswordResetEmail(email)

export const passwordUpdate = (password) =>
    auth.currentUser.updatePassword(password)

export const singOut = () =>
    auth.signOut()