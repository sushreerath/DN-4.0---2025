export default function CourseDetails() {
  const courses = [
    { name: "Angular", date: "4/5/2021" },
    { name: "React", date: "6/3/20201" }
  ];

  return (
    <div className="section">
      <h2>Course Details</h2>
      {courses.map((course, index) => (
        <div key={index}>
          <strong>{course.name}</strong>
          <p>{course.date}</p>
        </div>
      ))}
    </div>
  );
}
