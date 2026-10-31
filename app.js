import express from 'express';
import { getAllBooks, getBookById } from './src/models/books.js';
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return res.status(200).json({ message: 'Books API is running' });
});
app.get('/books', async (req, res) => {
  try {
    const books = await getAllBooks();
    return res.status(200).json(books);
  } catch (error) {
    console.error('Failed to retrieve books:', error.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
});
app.get('/books/:id', async (req, res) => {
  try {
    const book = await getBookById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    return res.status(200).json(book);
  } catch (error) {
    console.error('Failed to retrieve book:', error.message);
    return res.status(500).json({ message: 'Internal server error' });
  }
});
export default app;