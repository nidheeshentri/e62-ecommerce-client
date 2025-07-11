import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/HEader'

const UserLayout = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default UserLayout