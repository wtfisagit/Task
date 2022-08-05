fetch("https://jsonplaceholder.typicode.com/posts/15")
  .then((response) => response.json())
  .then(
    (json) => (document.querySelector(".card_9_title").textContent = json.title)
  );

fetch("https://jsonplaceholder.typicode.com/posts/15")
  .then((response) => response.json())
  .then(
    (json) => (document.querySelector(".card_9_body").textContent = json.body)
  );
