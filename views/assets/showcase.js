$(document).ready(function() {
  const urlQueries = new URLSearchParams(window.location.search);
  const authorId = urlQueries.get("AuthorId");
  console.log(authorId);
});
