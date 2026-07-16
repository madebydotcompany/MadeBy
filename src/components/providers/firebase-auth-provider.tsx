"use client";
import { onAuthStateChanged, type User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { firebaseAuth } from "@/lib/firebase";
type AuthState = { user: User | null; loading: boolean };
const AuthContext = createContext<AuthState>({ user: null, loading: true });
export function FirebaseAuthProvider({ children }: { children: React.ReactNode }) { const [state, setState] = useState<AuthState>({ user: null, loading: true }); useEffect(() => { if (!firebaseAuth) { setState({ user: null, loading: false }); return; } return onAuthStateChanged(firebaseAuth, user => setState({ user, loading: false })); }, []); return <AuthContext.Provider value={state}>{children}</AuthContext.Provider>; }
export function useFirebaseAuth() { return useContext(AuthContext); }
