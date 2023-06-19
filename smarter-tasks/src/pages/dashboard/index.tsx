import React from "react";

const Dashboard: React.FC = () => {
  const name = "Pranshu";
  const email = "pranshu1902@gmail.com";

  const logout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userData");
    window.location.href = "/signin";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Dashboard
      </h1>
      <div className="flex justify-between gap-4">
        <p>
          {name}
          <br />
          {email}
        </p>
        <button
          id="logout-link"
          onClick={logout}
          className="text-red-500 bg-red-300 hover:text-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
