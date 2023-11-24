/* Function to display BookList */
function BookList({ Books, onBookDeleteClick }) {
  console.log("Books", Books);
  return (
    <>
      <ul style={{ listStyleType: 'none' }}>
        {Books.map((Book, index) => (
          <li key={index}>
            {Book}
            <button style={{ color: 'red' }} onClick={() => onBookDeleteClick(index)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}
export default BookList;
