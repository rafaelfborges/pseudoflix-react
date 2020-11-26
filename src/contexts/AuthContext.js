import { createContext, useContext, useState, useEffect } from "react";
import { auth, fbAuthProvider } from "../firebase";

const AuthContext = createContext();

function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  async function emailSignup(email, password) {
    return await auth
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        auth.currentUser.sendEmailVerification();
        return {
          success: "Cadastro realizado com sucesso! Verifique seu e-mail!",
        };
      })
      .catch((err) => {
        return { error: err.message };
      });
  }

  function facebookSignup() {
    return auth.signInWithPopup(fbAuthProvider);
  }

  async function login(email, password) {
    return await auth
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => {
        if (!user.emailVerified)
          throw new Error("Seu e-mail ainda não foi verificado!");
      })
      .catch((err) => {
        return err.message;
      });
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }

  function updateProfile(profile) {
    return currentUser.updateProfile(profile);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { providerId } = user.providerData[0];

        if (user.emailVerified || providerId === "facebook.com") {
          setCurrentUser(user);
        }
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    emailSignup,
    logout,
    facebookSignup,
    resetPassword,
    updateEmail,
    updatePassword,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, useAuth };
