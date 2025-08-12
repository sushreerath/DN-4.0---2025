import React from "react";
import "./App.css";

function App() {
  const heading = <h1>Office Space Rental App</h1>;

  const officeImage =
    "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600";

  const office = {
    name: "Prestige Tech Park",
    rent: 55000,
    address: "Whitefield, Bangalore",
  };

  const officeSpaces = [
    { name: "Prestige Tech Park", rent: 55000, address: "Whitefield, Bangalore" },
    { name: "Mindspace", rent: 65000, address: "HITEC City, Hyderabad" },
    { name: "DLF Cyber City", rent: 75000, address: "Gurgaon, Haryana" },
    { name: "Manyata Tech Park", rent: 59000, address: "Nagawara, Bangalore" },
  ];

  return (
    <div className="App">
      {heading}
      <img src={officeImage} alt="Office Space" width="400" />

      <h2>{office.name}</h2>
      <p style={{ color: office.rent < 60000 ? "red" : "green" }}>
        Rent: ₹{office.rent}
      </p>
      <p>{office.address}</p>

      <hr />

      <h2>Available Office Spaces</h2>
      <ul>
        {officeSpaces.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> -{" "}
            <span style={{ color: item.rent < 60000 ? "red" : "green" }}>
              ₹{item.rent}
            </span>{" "}
            ({item.address})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
