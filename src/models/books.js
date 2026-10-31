import { getDb } from '../db/connect.js';

const getAllBooks = async () => {
  return await getDb()
    .collection('books')
    .find({}, {
      projection: {
        _id: 0,
        id: 1,
        author: 1,
        title: 1,
        publicationDate: 1
      }
    })
    .sort({ id: 1 })
    .toArray();
};
const getBookById = async (requestedId) => {
  return await getDb().collection('books').findOne(
    { id: requestedId },
    {
      projection: {
        _id: 0,
        id: 1,
        author: 1,
        title: 1,
        publicationDate: 1
      }
    }
  );
};
export { getAllBooks, getBookById };