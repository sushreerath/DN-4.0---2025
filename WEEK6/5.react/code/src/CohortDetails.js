import React from "react";

function CohortDetails({ title, status = "", mentor, startDate, endDate }) {
  const statusClass = status.toLowerCase() === "ongoing" ? "ongoing" : "completed";

  return (
    <div className="box">
      <h3 className={statusClass}>{title}</h3>
      <dl>
        <dt>Status:</dt>
        <dd>{status}</dd>

        <dt>Mentor:</dt>
        <dd>{mentor}</dd>

        <dt>Start Date:</dt>
        <dd>{startDate}</dd>

        <dt>End Date:</dt>
        <dd>{endDate}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
