import React, { useContext } from 'react'
import { Navigate, Outlet, BrowserRouter, useLocation } from 'react-router-dom'
import Userfront, { SignupForm, LoginForm } from "@userfront/toolkit/react";
import Table from './Table'
import { Routes, Route } from 'react-router-dom'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignupForm />}></Route>
        <Route path="/login" element={<LoginForm />}></Route>
        <Route path="/dashboard" element={
          <RequireAuth>
            <Table />
          </RequireAuth>} />
      </Routes>
    </BrowserRouter>
  )
}

function RequireAuth({ children }) {
  if (!Userfront.tokens.accessToken) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default AppRouter
