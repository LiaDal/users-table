import React from "react";
import Table from './Table'
import Userfront, { SignupForm, LoginForm } from "@userfront/toolkit/react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, } from "react-router-dom";
import AppRouter from "./Router";

Userfront.init("xbp94dmn");

export default function App() {
  return (

    <AppRouter/>
    // <Router>
    //     <Routes>
    //       <Route path="/" element={<SignupForm />} />
    //       <Route path="/login" element={<LoginForm />} />
    //       <Route path="/dashboard" element={
    //           <RequireAuth>
    //             <Table />
    //           </RequireAuth>} />
    //     </Routes>
    // </Router>
  );
}










































































// import React from 'react';
// import { AuthProvider } from './context/AuthContext';
// import Router from './Router';

// function App() {

//   return (
//     <AuthProvider>
//       <Router />
//     </AuthProvider>
//   );
// }

// export default App;
