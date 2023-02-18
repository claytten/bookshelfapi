const {
  addBookHandler,
  editBookByIdHandler,
  getBookByIdHandler,
  getAllBooksHandler,
  deleteBookByIdHandler,
} = require('./handlers');

const prefixApi = '/api/v1';

const publicRoutes = [
  // creating book
  {
    method: 'POST',
    path: `${prefixApi}/books/create`,
    handler: addBookHandler,
  },

  // get book by id
  {
    method: 'GET',
    path: `${prefixApi}/books/{bookId}`,
    handler: getBookByIdHandler,
  },

  // get all books
  {
    method: 'GET',
    path: `${prefixApi}/books`,
    handler: getAllBooksHandler,
  },

  // edit book by id
  {
    method: 'PUT',
    path: `${prefixApi}/books/{bookId}`,
    handler: editBookByIdHandler,
  },

  // delete book by id
  {
    method: 'DELETE',
    path: `${prefixApi}/books/{bookId}`,
    handler: deleteBookByIdHandler,
  },
];

module.exports = publicRoutes;
