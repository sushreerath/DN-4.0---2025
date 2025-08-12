import { useState } from "react";
import CourseDetails from "./components/CourseDetails";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import "./styles.css";

export default function App() {
  const [showCourses, setShowCourses] = useState(true); // Logical AND
  const [showBooks, setShowBooks] = useState(true); // Ternary
  const [showBlogs, setShowBlogs] = useState(true); // If statement

  return (
    <div>
      <div className="buttons">
        <button onClick={() => setShowCourses(!showCourses)}>Toggle Courses</button>
        <button onClick={() => setShowBooks(!showBooks)}>Toggle Books</button>
        <button onClick={() => setShowBlogs(!showBlogs)}>Toggle Blogs</button>
      </div>

      <div className="container">
        {/* Logical AND */}
        {showCourses && <CourseDetails />}

        {/* Ternary Operator */}
        {showBooks ? <BookDetails /> : <div className="section"><h2>Books Hidden</h2></div>}

        {/* If Statement */}
        {(() => {
          if (showBlogs) {
            return <BlogDetails />;
          } else {
            return <div className="section"><h2>Blogs Hidden</h2></div>;
          }
        })()}
      </div>
    </div>
  );
}
