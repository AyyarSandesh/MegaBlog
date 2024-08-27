import React from 'react'
import {useDispatch} from 'react-redux'
import authSerive from '../../appwrite/auth'
import {logout} from '../../store/authSlice'


function LogoutBtn() {
    const dispatch =useDispatch()
    const logoutHandler=()=>{
        authSerive.logout().then(()=>{
            dispatch(logout())
            window.location.reload();
        })
    }
  return (
    <button onClick={logoutHandler} className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>Logout</button>
  )
}

export default LogoutBtn