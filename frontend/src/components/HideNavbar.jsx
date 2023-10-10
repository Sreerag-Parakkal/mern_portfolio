import { useEffect, useState } from "react"
import React from 'react'
import { useLocation } from "react-router-dom"

const HideNavbar = ({children}) => {

    const location = useLocation();

    const [showNavbar, setShowNavbar] = useState(false)
    
    useEffect(()=>{
        // console.log('this is location', location);
        if(location.pathname === '/'){
            setShowNavbar(false)
        }else if(location.pathname === '/login'){
            setShowNavbar(false)
        }else if(location.pathname === '/signup'){
            setShowNavbar(false)
        }else{
            setShowNavbar(true)
        }
    },[location])

  return (
    <div>{showNavbar && children}</div>
  )
}

export default HideNavbar