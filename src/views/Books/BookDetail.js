import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Book from '../../components/book/Book';
import { getBookById } from '../../services/books';

function BookDetail(props) {
  const id = props.match.params.id;
  const [book, setBook] = useState(null);

  useEffect(() => {
    getBookById(id).then(({ data }) => setBook(data));
  }, [id]);

  if (!book) return <h3>Loading book...</h3>;

  return (
    <>
      <Book book={book} showDetail />
      <Link to="/books">CATALOG</Link>
    </>
  );
}

export default BookDetail;
