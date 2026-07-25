import React from "react";

function BlogDetails() {
  const blogs = [
    {
      id: 1,
      title: "React Hooks",
      author: "Pranay",
      description: "Introduction to React Hooks."
    },
    {
      id: 2,
      title: "Conditional Rendering",
      author: "OpenAI",
      description: "Learn conditional rendering in React."
    }
  ];

  return (
    <div>
      <h2>Blog Details</h2>

      {blogs.map((blog) => (
        <div key={blog.id}>
          <h3>{blog.title}</h3>
          <p>Author: {blog.author}</p>
          <p>{blog.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default BlogDetails;