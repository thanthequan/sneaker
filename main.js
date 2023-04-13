const form = document.querySelector("form");
const input = document.querySelector('input[type="text"]');

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent the form from submitting
  const searchTerm = input.value.trim(); // get the search term and remove whitespace
  if (searchTerm) {
    // do something with the search term, e.g. search a database
    console.log(searchTerm);
  }
});
