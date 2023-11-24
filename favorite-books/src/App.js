import "./App.css";
import BookList from "./BookList";
import AddBookForm from "./AddBookForm";
import { useState } from "react";

function App() {
  const [Books, setBooks] = useState([
    "The Richest Man in Babylon",
    "Man's Search for Meaning",
    "168 Hours",
  ]);
  const [newBook, setNewBook] = useState("");

  // Handles updating our newBook as user types
  function HandleAddBookFormChange(e) {
    e.preventDefault();
    const newValue = e.target.value;
    console.log("NewValue in Change", newValue);
    setNewBook(newValue);
  }

  // Handles updating our booklist when user clicks button
  function HandleAddBookFormClick(e) {
    e.preventDefault();

    if (newBook !== "") {
      const newBooks = [...Books, newBook];
      setBooks(newBooks);
      setNewBook("");
    }
  }

  function HandleBookDeleteClick(id) {
    const updatedBooks = Books.filter((book, index) => index !== id);
    setBooks(updatedBooks);
  }

  return (
    <div className="App">
      <h1>Favorite Books</h1>
      <AddBookForm
        Book={newBook}
        onBookFormChange={HandleAddBookFormChange}
        onBookFormClick={HandleAddBookFormClick}
      />
      <BookList Books={Books} onBookDeleteClick={HandleBookDeleteClick} />
    </div>
  );
}

export default App;

