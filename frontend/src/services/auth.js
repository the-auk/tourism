// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    signOut,
    EmailAuthProvider,
    updatePassword,
    reauthenticateWithCredential,
    createUserWithEmailAndPassword,
    updateProfile,
    deleteUser,
    sendPasswordResetEmail,
    sendEmailVerification
  } from "firebase/auth";
  import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
  import { initializeAuth, getReactNativePersistence } from 'firebase/auth';

  const firebaseConfig = {
    apiKey: "AIzaSyBzXwznZzH-DVx8C6qpWhkStfBGuzQGwr8",
    authDomain: "bains-tourism.firebaseapp.com",
    projectId: "bains-tourism",
    storageBucket: "bains-tourism.appspot.com",
    messagingSenderId: "17486788822",
    appId: "1:17486788822:web:26da17722eefd1678df177"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const logInWithEmailAndPassword = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      return userCredential.user;
    } catch (err) {
        throw err;
    }
  };
  const createWithEmailAndPassword = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      verifyEmail();
      return userCredential.user;
    } catch (err) {
      throw err;
    }
  };
  const getToken = async () => {
    try {
      const idToken = await auth.currentUser.getIdToken(true);
      return idToken;
    } catch (err) {
        throw err;
    }
  };
  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch(err){
        throw err;
    }
  }

  const changePassword = async (currentPassword, newPassword) => {
    try{
      const user = auth.currentUser;
      var credentials = EmailAuthProvider.credential(
        user.email,
        currentPassword
      );
        await reauthenticateWithCredential(user, credentials)
        await updatePassword(user, newPassword);
    } catch(err){
        throw err;
    }
  }
  const delUser = async (currentPassword) => {
    try{ 
      const user = auth.currentUser;
      var credentials = EmailAuthProvider.credential(
        user.email,
        currentPassword
      );
        await reauthenticateWithCredential(user, credentials)
      await deleteUser(user)
    } catch(err){
        throw err;
    }
  }
  const updateProfilePic = async (url) => {
    try{
      await updateProfile(auth.currentUser, {
        photoURL: url
      })
    } catch(err){
        throw err;
    }
  }
  const resetPassword = async (email) => {
    try{
      await sendPasswordResetEmail(auth, email);
    } catch(err){
        throw err;
    }
  }

  const checkUserStatus = () => {
    try{
      return auth.currentUser != null;
    } catch(err){
        throw err;
    }
  }
  
  const verifyEmail = async () => {
    try{
      await sendEmailVerification(auth.currentUser);
    } catch(err){
        throw err;
    }
  }
  const isEmailVerified = () => {
    try{
      return auth.currentUser.emailVerified;
    } catch(err){
        throw err;
    }
  }
exports.logInWithEmailAndPassword = logInWithEmailAndPassword;
exports.createWithEmailAndPassword = createWithEmailAndPassword;
exports.getToken = getToken;
exports.app = app;
exports.auth = auth;
exports.signOutUser = signOutUser;
exports.changePassword = changePassword;
exports.delUser = delUser;
exports.updateProfilePic = updateProfilePic;
exports.resetPassword = resetPassword;
exports.checkUserStatus = checkUserStatus;
exports.isEmailVerified = isEmailVerified;
exports.verifyEmail = verifyEmail;