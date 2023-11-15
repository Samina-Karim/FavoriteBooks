import "./App.css";
import BookList from "./BookList";
import { useState } from "react";


function App() {
  let [Books, setBooks] = useState([
    "The Richest Man in Babylon" ,
    "Man's Search for Meaning" ,
    "168 Hours",
  ]);
  

  //function AddMoreBooks(){
  //setBooks=[...Books,{title:"War of the Worlds"}];
  //}

  return (
    <>
      <h1>Favorite Books</h1>
      <p>
        This is a Book List application where users can add and remove books
        from their book list
      </p>
      <BookList Books={Books} />
    </>
  );
}

export default App;
