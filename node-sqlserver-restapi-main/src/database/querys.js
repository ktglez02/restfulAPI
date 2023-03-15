export const querys = {
  getAllBooks: "SELECT  * FROM bookdata",
  getBookById: "SELECT * FROM bookdata Where Id = @Id",
  addNewBook:
    "INSERT INTO bookdata (id, title, author, genre, avRating , ISBN, copiesSold, price, publisher, yearPublised, description) VALUES (@id, @title, @author, @genre, @avRating , @ISBN, @copiesSold, @price, @publisher, @yearPublised, @description);",
  deleteBook: "DELETE FROM [bookBase].[dbo].[bookdata] WHERE Id= @Id",
  getTotalBooks: "SELECT COUNT(*) FROM bookBase.dbo.bookdata",
  updateBookById:
    "UPDATE [bookBase].[dbo].[bookdata] SET id = @id, title = @title, author = @author, genre = @genre, avRating= @avRating, ISBN= @ISBN, copiesSold= @copiesSold, price= @price, publisher= @publisher, description= @description    WHERE Id = @id",
};
