import Header from "./(DashboardLayout)/layout/vertical/header/Header";
import Sidebar from "./(DashboardLayout)/layout/vertical/sidebar/Sidebar";
import React from "react";

export default function Home() {
  return (
    <div className="flex">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main content wrapper */}
      <div className="flex-1">
        {/* Header Component */}
        <Header />pnpm run dev

        {/* Main Content */}
        <main className="p-4">
          {/* Add your main content here */}
          <h1>Welcome to the Dashboard</h1>
          {/* Additional content */}
        </main>
      </div>
    </div>
  );
}
