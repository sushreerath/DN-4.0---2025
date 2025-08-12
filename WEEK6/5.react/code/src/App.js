import React from "react";
import CohortDetails from "./CohortDetails";
import "./styles.css";

function App() {
  const cohorts = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      status: "Ongoing",
      mentor: "John Doe",
      startDate: "2025-08-01",
      endDate: "2025-12-15",
    },
    {
      id: 2,
      title: "Data Science Fundamentals",
      status: "Completed",
      mentor: "Jane Smith",
      startDate: "2025-01-05",
      endDate: "2025-05-30",
    },
    {
      id: 3,
      title: "Mobile App Development",
      status: "Ongoing",
      mentor: "Alice Brown",
      startDate: "2025-09-01",
      endDate: "2026-02-28",
    }
  ];

  return (
    <div>
      <h1>Student Management Portal</h1>
      {cohorts.map((cohort) => (
        <CohortDetails
          key={cohort.id}
          title={cohort.title}
          status={cohort.status}
          mentor={cohort.mentor}
          startDate={cohort.startDate}
          endDate={cohort.endDate}
        />
      ))}
    </div>
  );
}

export default App;
