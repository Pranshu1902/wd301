import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Header from "./Header";
import HomePage from "./HomePage";
import TaskApp from "./TaskApp";
import TaskDetailsPage from "./TaskDetailsPage";
import { Navigate } from "react-router-dom";
// import Signin from "./Signin";
import { ProtectedRoute } from "./ProtectedRoute";
import { NotFound } from "./NotFound";
import Form from "./Form";
import Signup from "./pages/signup";
import Signin from './pages/signin';
import Dashboard from "./pages/dashboard";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/signin" && location.pathname !== "/notfound" && <Header />}
      {/* <ReactPlayground /> */}
      <Form />
      <Routes>
        <Route path="/" element={<ProtectedRoute element={<HomePage />} />} />
        <Route
          path="/tasks"
          element={<ProtectedRoute element={<TaskApp />} />}
        />
        <Route
          path="/tasks/:id"
          element={<ProtectedRoute element={<TaskDetailsPage />} />}
        />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<ProtectedRoute element={ <Dashboard /> } />} />
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/*" element={<Navigate to="/notfound" />} />
      </Routes>
    </div>
  );
}

export default App;
