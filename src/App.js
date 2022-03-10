import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import RouterApp from './components/RouterApp'
import { AuthContext } from './context'

export default function App() {
  const [isAuth , setIsAuth] = useState(true)
  useEffect(()=>{
    if(localStorage.getItem('auth')){
      setIsAuth(false)
    }
  },[])
  return (
    <AuthContext.Provider value={{isAuth , setIsAuth}}>
      <BrowserRouter>
        <Navbar />
        <RouterApp />
      </BrowserRouter>
    </AuthContext.Provider>
  )
}

