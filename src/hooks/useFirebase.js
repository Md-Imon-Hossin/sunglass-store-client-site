 
import { getAuth, createUserWithEmailAndPassword,signOut,onAuthStateChanged ,signInWithEmailAndPassword,updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Login/Firebase/firebase.init";
// initializeAuthentication  
initializeAuthentication () 
// useFirebase 
const useFirebase = ()=>{
    const [user,setUser] = useState({}) 
    const [isLoading,setIsLoading] = useState(true) 
    const [authError,setAuthError] = useState('')
    const [admin,setAdmin] = useState(false) 
    const auth = getAuth();
    // Register User
 const registerUser = (email,password,history,name)=>{
     setIsLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
      
    .then((userCredential) => {

        setAuthError('')
        const newUser = {email, displayName : name}
        setUser(newUser)
        // save user to the database 
        saveUser(email,name)
        // send name to firebase after creation 
        updateProfile(auth.currentUser, {
          displayName: name
        }).then(() => {
         
        }).catch((error) => {
          
        });
        history.replace('/')
      })
      .catch((error) => {
      setAuthError(error.message) ;
      })
      
      .finally(()=>setIsLoading(false));
    }
    // Login User 
    const loginUser = (email,password,location,history)=>{
      setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
      const destination = location?.state?.from || '/'
      history.replace(destination)
// ====== my order added extra add ====================
      setUser(userCredential.user)
      sessionStorage.setItem("email",userCredential.user.email)

          setAuthError('')
        })
        .catch((error) => {
            setAuthError(error.message) ;
        })
        .finally(()=>setIsLoading(false));
    }




    // observe user state
    useEffect(()=>{
     const unsubscribe =    onAuthStateChanged(auth, (user) => {
            if (user) {
             
              setUser(user)
            } else {
             setUser({})
            }
            setIsLoading(false)
          });
          return ()=> unsubscribe
    },[])
       
    useEffect(()=>{
      fetch(`http://localhost:5000/users/${user.email}`)
      .then(res=>res.json()) 
      .then(data=>setAdmin(data.admin))
    },[user.email])

    //  Logout 
    const logOut = ()=>{
        setIsLoading(true)
        signOut(auth).then(() => {
        }).catch((error) => {
        })
        .finally(()=>setIsLoading(false));
    }
    // SaveUser 
    const saveUser = (email,displayName)=>{
   const user = {email,displayName} 
   fetch('http://localhost:5000/users',{
     method : 'POST',
     headers : {
       'content-type' : 'application/json'
     },
     body : JSON.stringify(user)
     
   })
   .then()
    }
    return {
      admin,
        user ,
        registerUser,
        logOut,
        loginUser,
        isLoading,
        authError,

    }
}
export default useFirebase ;



 