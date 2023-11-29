import "./App.css";
import APIServices from "./ApiServices";
import BookList from "./BookList";
import AddBookForm from "./AddBookForm";
import { useState, useEffect } from "react";



/***************** MAIN APP FUNCTION ******************************** */
function App() {

  const [Books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    book: ''
   });

  // Sync loads all the books from the mockapi onto the local Books object
  const syncBooks = () => {
    APIServices.getBooksAPI().then(Books => setBooks(Books))
  }
  // Run once
  useEffect(() => {
    syncBooks();
  }, [])

  // Handles updating our newBook's book title as user types
  const HandleAddBookFormChange=(e)=> {
    e.preventDefault();
  
    const newValue = e.target.value;
    setNewBook({
      book:newValue
    }); 
  }

  // Handles addition of the book when user clicks the Add button
  const HandleAddBookFormClick = async(e) => {
    if (newBook !== ""){
        await APIServices.addBookAPI(newBook).then(() => {
        syncBooks();
        setNewBook({book: ''});
      })
    }
  }

   // Handles deletion of book in our booklist when user clicks 'x' button
   const HandleBookDeleteClick = async (id) => {
    await APIServices.deleteBookAPI(id); // Await the deletion operation
    syncBooks(); // Refresh books list after successful deletion
  }
  

  // Return value of the Main App function 
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

