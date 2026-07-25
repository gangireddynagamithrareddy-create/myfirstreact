import React, { useState } from "react";
import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

function App() {
  const [showBooks] = useState(true);
  const [showBlogs] = useState(true);
  const [showCourses] = useState(true);

  return (
    <div style={{ margin: "20px" }}>
      <h1>Blogger Application</h1>

      {showBooks && <BookDetails />}

      {showBlogs && <BlogDetails />}

      {showCourses && <CourseDetails />}
    </div>
  );
}

export default App;