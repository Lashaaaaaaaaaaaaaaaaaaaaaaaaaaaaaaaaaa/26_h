import React, { useEffect, useState } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import { IUser } from '../interfaces/user.interface'

const Users:React.FC = () => {
    const users = useLoaderData() as IUser[]


  return (
    <div>
        {users.map(({id, name, username}) => (
            <Link to={`/users/${id}`} key={id}>
                <h1>{name}</h1>
                <h1>{username}</h1>
            </Link>
        ))}
    </div>
  )
}

export default Users

export const loader = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json()
}