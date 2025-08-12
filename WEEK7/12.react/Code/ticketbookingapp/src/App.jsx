import { useState } from "react";

function GuestPage() {
  return (
    <div>
      <h2>Welcome Guest</h2>
      <p>Browse available flights:</p>
      <ul>
        <li>Flight AI-101 – Mumbai → Delhi – ₹5,000</li>
        <li>Flight AI-202 – Chennai → Bangalore – ₹3,500</li>
        <li>Flight AI-303 – Kolkata → Hyderabad – ₹4,200</li>
      </ul>
    </div>
  );
}

function UserPage() {
  return (
    <div>
      <h2>Welcome, User</h2>
      <p>Book your flight tickets below:</p>
      <button>Book AI-101</button>
      <button>Book AI-202</button>
      <button>Book AI-303</button>
    </div>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Ticket Booking App</h1>
      {isLoggedIn ? (
        <>
          <UserPage />
          <button
            style={{ marginTop: "20px" }}
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <GuestPage />
          <button
            style={{ marginTop: "20px" }}
            onClick={handleLogin}
          >
            Login
          </button>
        </>
      )}
    </div>
  );
}
