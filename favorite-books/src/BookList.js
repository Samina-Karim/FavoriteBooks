/* Function to display BookList */
function BookList({ Books }) {
  // passing props in curly brackets
  return (
    <>
      {
        /* <Message content ={chat1}/> */
        <ul>
          {Books.map((Book) => (
            <li>{Book}</li>
          ))}
        </ul>
      }
    </>
  );
}
export default BookList;
