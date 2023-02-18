const {
  addBookHandler,
  editBookByIdHandler,
  getBookByIdHandler,
  getAllBooksHandler,
  deleteBookByIdHandler,
} = require('./handlers');

const publicRoutes = [
  // creating book
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },

  // get book by id
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: getBookByIdHandler,
  },

  // get all books
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },

  // edit book by id
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: editBookByIdHandler,
  },

  // delete book by id
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = publicRoutes;
