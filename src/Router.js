import React from 'react'
import { Navigate, BrowserRouter } from 'react-router-dom'
import Userfront from "@userfront/toolkit/react";
import Table from './components/Table'
import Home from './Home'
import Login from './components/Login'
import { Routes, Route } from 'react-router-dom'


const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
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
