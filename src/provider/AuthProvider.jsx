import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app)


const AuthProvider = ({children}) => {
  const [user,setUser]= useState(null)
  const [loading,setLoading] = useState(true)

  const createUser = (email,password)=>{
    setLoading(true)
      return createUserWithEmailAndPassword(auth,email,password)
  }
  const signInUser = (email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }
  const logOutUser = ()=>{
    setLoading(true)
    return signOut(auth)
  }
  const updateUserProfile = (obj)=>{
    setLoading(true)
    return updateProfile(auth.currentUser,obj)
  }
  const passwordReset = (email)=>{
    setLoading(true)
      return sendPasswordResetEmail(auth,email)
  }
  const signInWithGoogle = (googleProvider)=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }
  const signInWithGithub = (githubProvider)=>{
    setLoading(true)
    return signInWithPopup(auth,githubProvider)
  }

    const authInfo ={
      user,
      loading,
      setLoading,
      setUser,
      createUser,
      logOutUser,
      updateUserProfile,
      signInUser,
      passwordReset,
      signInWithGoogle,
      signInWithGithub
    }

 useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
    setUser(currentUser)
    setLoading(false)
  })
  return ()=>{
    unsubscribe()
  }

 },[])



  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
