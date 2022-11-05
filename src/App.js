import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthProvider from "./context/AuthContext";
import RequireAuth from "./context/RequireAuth";
import Dashboard from "./components/Dashboard";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";

const App = () =>
{
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route
                path="/"
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                } />
              <Route path="/update-profile" element={<UpdateProfile />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/LogIn" element={<LogIn />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
};

export default App;