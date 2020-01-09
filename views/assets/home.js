$(document).ready(function() {
  renderPosts();
});

renderPosts = () => {
  $.ajax({
    type: "GET",
    url: "/api/author"
  }).then(res => {
    console.log(res);
  });
};

// window.location.href = "/showcase?AuthorId=1";
