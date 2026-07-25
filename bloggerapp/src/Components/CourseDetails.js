import React from "react";

function CourseDetails() {
  const courses = [
    {
      id: 1,
      name: "ReactJS",
      duration: "6 Weeks"
    },
    {
      id: 2,
      name: "Spring Boot",
      duration: "8 Weeks"
    },
    {
      id: 3,
      name: "Microservices",
      duration: "10 Weeks"
    }
  ];

  return (
    <div>
      <h2>Course Details</h2>

      {courses.map((course) => (
        <div key={course.id}>
          <h3>{course.name}</h3>
          <p>Duration: {course.duration}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default CourseDetails;