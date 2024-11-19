import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { auth } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  UserCredential,
  User,
} from "firebase/auth";

// Define types for the context value
interface AuthContextType {
  currentUser: User | null;
  loading: boolean;
  registerUser: (email: string, password: string) => Promise<UserCredential>;
  loginUser: (email: string, password: string) => Promise<UserCredential>;
  signInWithGoogle: () => Promise<UserCredential>;
  logout: () => Promise<void>;
}

// Create the context with a default value (empty object or null)
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

const googleProvider = new GoogleAuthProvider();

// AuthProvider component
interface AuthProviderProps {
  children: ReactNode; // Specify that children is a ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null); // Typing state as User or null
  const [loading, setLoading] = useState<boolean>(true); // Typing loading as a boolean

  // Register a user
  const registerUser = async (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  // Login the user
  const loginUser = async (
    email: string,
    password: string
  ): Promise<UserCredential> => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  // Sign up with Google
  const signInWithGoogle = async (): Promise<UserCredential> => {
    return await signInWithPopup(auth, googleProvider);
  };

  // Logout the user
  const logout = async (): Promise<void> => {
    await signOut(auth);
  };

  // Manage user authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    // Cleanup on unmount
    return () => unsubscribe();
  }, []);

  const value = {
    currentUser,
    loading,
    registerUser,
    loginUser,
    signInWithGoogle,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
