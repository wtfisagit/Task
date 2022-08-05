fetch("https://jsonplaceholder.typicode.com/posts/2")
  .then((response) => response.json())
  .then(
    (json) => (document.querySelector(".card_1_title").textContent = json.title)
  );

fetch("https://jsonplaceholder.typicode.com/posts/2")
  .then((response) => response.json())
  .then(
    (json) => (document.querySelector(".card_1_body ").textContent = json.body)
  );
