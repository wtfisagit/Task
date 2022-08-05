fetch("https://jsonplaceholder.typicode.com/posts/14")
  .then((response) => response.json())
  .then(
    (json) => (document.querySelector(".card_8_title").textContent = json.title)
  );

fetch("https://jsonplaceholder.typicode.com/posts/14")
  .then((response) => response.json())
  .then(
    (json) => (document.querySelector(".card_8_body").textContent = json.body)
  );
