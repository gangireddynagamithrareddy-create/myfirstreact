import React, { useState } from "react";
import GuestPage from "./Components/GuestPage";
import UserPage from "./Components/UserPage";
import LoginButton from "./Components/LoginButton";
import LogoutButton from "./Components/LogoutButton";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div style={{ margin: "20px" }}>
      <h1>Ticket Booking Application</h1>

      {isLoggedIn ? (
        <>
          <LogoutButton onLogout={() => setIsLoggedIn(false)} />
          <UserPage />
        </>
      ) : (
        <>
          <LoginButton onLogin={() => setIsLoggedIn(true)} />
          <GuestPage />
        </>
      )}
    </div>
  );
}

export default App;