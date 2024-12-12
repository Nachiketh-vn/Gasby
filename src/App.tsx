import React from "react";

const App: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-900 via-blue-800 to-blue-500 text-white">
      <div className="text-center bg-black bg-opacity-80 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">
          Welcome to Meet Chat Pro
        </h1>
        <p className="text-sm md:text-lg mb-6">
          Enhance your Google Meet Chat experience!
        </p>
      </div>
    </div>
  );
};

export default App;

