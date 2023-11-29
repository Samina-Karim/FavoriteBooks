// Form to input book
function AddBookForm({ Book , onBookFormChange, onBookFormClick }) {
    return (
      <>
        <input value={Book.book} placeholder="Enter title" onChange={onBookFormChange} />
        <button onClick={onBookFormClick}>Add Book</button>
      </>
    );
  }
  export default AddBookForm;