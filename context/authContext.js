import React, { createContext } from "react";
import { useContext, useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { publicPaths } from "../constants/publicPaths";

const googleProvider = new GoogleAuthProvider();

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const userInfo = useRef();
  const router = useRouter();
  const user = auth.currentUser;

  const [authorized, setAuthorized] = useState(false);

  const SignUp = (email, password, confirmPassword) => {
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(async () => {
          router.push("/dashboard");
          verifyEmail();
        })
        .catch((err) => alert(err.message));
    } else {
      alert("Passwords don't match");
    }
  };

  const LogIn = (loginEmail, loginPassword) => {
    signInWithEmailAndPassword(auth, loginEmail, loginPassword)
      .then(async () => {
        router.push("/dashboard");
        verifyEmail();
      })
      .catch((err) => alert(err.message));
  };

  const LoginWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(async () => {
        router.push("/dashboard");
        verifyEmail();
      })
      .catch((err) => alert(err.message));
  };

  const SignUpWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then(async () => {
        router.push("/dashboard");
        verifyEmail();
      })
      .catch((err) => alert(err.message));
  };

  const verifyEmail = async () => {
    const user = auth.currentUser;
    if (!user.emailVerified)
      await sendEmailVerification(auth.currentUser).then(() => {
        const user = auth.currentUser;
        if (user) {
          console.log(user.emailVerified);
        } else {
          console.log("no user found");
        }
      });
  };

  const SignOut = () => {
    signOut(auth)
      .then(() => router.push("/"))
      .catch((err) => alert(err.message));
  };

  useEffect(() => {
    const unscubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
    });
    return unscubscribe;
  }, []);

  useEffect(() => {
    const user = auth.currentUser;
    setCurrentUser(user);
  }, []);

  useEffect(() => {
    const authCheck = () => {
      if (!user && !publicPaths.includes(router.asPath.split("?")[0])) {
        setAuthorized(false);
        // dispatch(setRedirectLink({ goto: router.asPath }));
        void router.push({
          pathname: "/login",
        });
      } else {
        setAuthorized(true);
      }
    };

    authCheck();

    const preventAccess = () => setAuthorized(false);

    router.events.on("routeChangeStart", preventAccess);
    router.events.on("routeChangeComplete", authCheck);

    return () => {
      router.events.off("routeChangeStart", preventAccess);
      router.events.off("routeChangeComplete", authCheck);
    };
  }, [router, router.events, currentUser]);

  const value = {
    currentUser,
    LogIn,
    LoginWithGoogle,
    SignOut,
    SignUp,
    userInfo,
    SignUpWithGoogle,
    sendEmailVerification,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
