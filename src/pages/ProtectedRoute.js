import React from 'react'
import { Navigate } from 'react-router-dom'
function ProtectedRoute({children, user}) {

    if(!user){
        return <>
        {alert('forgot to put name or email')}
        
        <Navigate to='/'></Navigate></> 
        }
    return children
}

export default ProtectedRoute