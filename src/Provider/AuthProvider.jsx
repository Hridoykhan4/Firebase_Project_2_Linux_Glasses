import FirebaseContext from "../contexts/FirebaseContext";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
  FacebookAuthProvider,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
import app from "../Firebase/firebaseConfig";
import { useEffect, useState } from "react";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();
const faceBookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   Sign In user

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Google

  const logInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  //   Twitter

  const logInWithTwitter = () => {
    setLoading(true);
    return signInWithPopup(auth, twitterProvider);
  };
  //   Facebook

  const logInWithFacebook = () => {
    setLoading(true);
    return signInWithPopup(auth, faceBookProvider);
  };

  //   Sign  Out

  const signOutUser = () => {
    setLoading(true);
    setUser(null);
    return signOut(auth);
  };

  // Update User Profile

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // Send Verification Email
  const sendVerification = () => {
    return sendEmailVerification(auth.currentUser);
  };

  // OnAuthState
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    createNewUser,
    signInUser,
    user,
    setUser,
    logInWithGoogle,
    signOutUser,
    logInWithTwitter,
    logInWithFacebook,
    loading,
    updateUserProfile,
    sendVerification
  };

  return (
    <FirebaseContext.Provider value={authInfo}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default AuthProvider;
