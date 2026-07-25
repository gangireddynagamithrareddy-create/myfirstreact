import React from "react";

function BookDetails() {
  const books = [
    { id: 1, title: "React Basics", author: "Jordan Walke", price: 500 },
    { id: 2, title: "Java Programming", author: "James Gosling", price: 650 },
    { id: 3, title: "Python Essentials", author: "Guido van Rossum", price: 700 }
  ];

  return (
    <div>
      <h2>Book Details</h2>

      {books.map((book) => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
          <p>Price: ₹{book.price}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default BookDetails;