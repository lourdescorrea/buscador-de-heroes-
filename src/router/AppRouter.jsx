import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import {LoginPages} from '../auth/pages/LoginPages'

import { Navbar } from '../ui/components/Navbar'
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


export const AppRouter = () => {
  return (
    <>

     <Navbar/>
      <Routes>
        
          {/* ruta publica */}
        <Route path="/login" element={
          
          <PublicRoute>
            <LoginPages/>
          </PublicRoute>

         }/>
          {/* <Route path="login" element={<LoginPages/>}/> */}

          {/* RUTA PRIVADA */}
          <Route path="/*" element={
            <PrivateRoute>
                <HeroesRoutes/>
            </PrivateRoute>
          }/>
          {/* <Route path="/*" element={<HeroesRoutes/>}/> */}
      </Routes>
    </>
  )
}
