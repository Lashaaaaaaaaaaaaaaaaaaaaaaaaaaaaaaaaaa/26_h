import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const UsersLayouts:React.FC = () => {
  return (
    <>
    
        <nav>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/something'}>Something</Link></li>

        <li><Link to={'/users'}>Users</Link></li>
      </nav>

    <div>
        <Outlet />
    </div>
    </>  
  )
}

export default UsersLayouts