function AddBookForm({ Book , onBookFormChange, onBookFormClick }) {
    return (
      <>
        <input value={Book} onChange={onBookFormChange} />
        <button onClick={onBookFormClick}>Add</button>
      </>
    );
  }
  export default AddBookForm;