import "./App.css";
import BookList from "./BookList";
import AddBookForm from "./AddBookForm";
import { useState } from "react";


function App() {
  const [Books, setBooks] = useState([
    "The Richest Man in Babylon" ,
    "Man's Search for Meaning" ,
    "168 Hours",
  ]);
  const [newBook, setNewBook] = useState("");
 
  // Handles updating our newBook as user types
  function HandleAddBookFormChange(e){
    e.preventDefault(); // prevent default action
    const newValue= e.target.value;
    console.log("NewValue in Change", newValue);
    setNewBook(newValue);
  }

 // Handles updating our booklist when user clicks button
 function HandleAddBookFormClick(e) {
  e.preventDefault(); // prevent default action

  // if condition checked to avoid unnecessary comman executions on empty Add clicks
  if (newBook !=="")
  {
    const newBooks=[...Books,newBook]
    setBooks(newBooks);
  }
  setNewBook("");
 
}

  return (
    <div className="App">
      <h1>Favorite Books</h1>
      <p>
        This is a Book List application where users can add and remove books
        from their book list
      </p>
      <BookList Books={Books} />
      <AddBookForm
        Book={newBook}
        onBookFormChange={HandleAddBookFormChange}
        onBookFormClick={HandleAddBookFormClick}
      />
    </div>
  );
}

export default App;
