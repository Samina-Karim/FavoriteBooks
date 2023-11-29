/* Function to display list of all books */
function BookList({ Books, onBookDeleteClick }) {
  return (
    <>
      <ul style={{ listStyleType: 'none' }}>
        {Books.map((Book) => (
          console.log("BookList",Book),
          <li key={Book.id}>
            {Book.book}
            <button style={{ color: 'red' }} onClick={() => onBookDeleteClick(Book.id)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default BookList;
