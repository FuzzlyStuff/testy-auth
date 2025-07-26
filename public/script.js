document.getElementById("commentForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const commentText = document.getElementById("commentInput").value;
  if (commentText.trim()) {
    const comment = document.createElement("div");
    comment.className = "comment";
    comment.innerText = commentText;
    document.getElementById("feed").prepend(comment);
    document.getElementById("commentInput").value = "";
  }
});
