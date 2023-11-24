function AddBookForm({ Book , onBookFormChange, onBookFormClick }) {
    return (
      <>
        <input value={Book } placeholder="Enter title" onChange={onBookFormChange} />
        <button onClick={onBookFormClick}>Add Book</button>
      </>
    );
  }
  export default AddBookForm;