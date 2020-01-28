$(function() {
  $(".eat-burger").on("click", async function(event) {
    event.preventDefault();
    var id = $(this).data("id");
    const url = "/api/burgers/" + id;
    // Send the PUT request.
    const response = await fetch(url, { method: "PUT" });
    if (response.status === 200) {
      location.reload();
    }
  });
});
