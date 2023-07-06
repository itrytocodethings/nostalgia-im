import React, {
  useContext,
  useState,
  useEffect,
  createContext,
  PropsWithChildren,
} from "react";
import supabase from "../config/supabase-client";
import { SignUpWithPasswordCredentials, SignInWithPasswordCredentials } from "@supabase/supabase-js";

// create a context for authentication
const AuthContext = createContext(null);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  // create state values for user data and loading
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // get session data if there is an active session
    const getSbSession = async () => {
      const auth = await supabase.auth.getSession();
      return auth.data.session;
    }

    const setSession = async () => {
      const session = await getSbSession();
      setUser(session.user ?? null);
      setLoading(false);
    }

    setSession();
    // listen for changes to auth
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    // cleanup the useEffect hook
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  // create signUp, signIn, signOut functions
  const value = {
    signUp: async (data: SignUpWithPasswordCredentials) => await supabase.auth.signUp(data),
    signIn: async (data: SignInWithPasswordCredentials) => await supabase.auth.signInWithPassword(data),
    signOut: async () => await supabase.auth.signOut(),
    user,
  };

  // use a provider to pass down the value
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// export the useAuth hook
export const useAuth = () => {
  return useContext(AuthContext);
};
