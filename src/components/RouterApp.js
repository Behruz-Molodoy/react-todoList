import React, { useContext } from 'react'
import { Route, Routes } from 'react-router'
import { AuthContext } from '../context'
import { privateRoutes, publicRoutes } from '../router/Route'

export default function RouterApp(props) {
  const {isAuth , setIsAuth} = useContext(AuthContext)
  return (
    isAuth
      ? <Routes>
        {publicRoutes.map(route => (
          <Route
            element={<route.element />}
            path={route.path}
            key={route.path} />
        ))}</Routes>

      : <Routes>
        {privateRoutes.map(route => (
          <Route
            element={<route.element />}
            path={route.path}
            key={route.path} />
        ))}
      </Routes>
  )
}
