fetch("https://jsonplaceholder.typicode.com/posts/10")
  .then((response) => response.json())
  .then(
    (json) => (document.querySelector(".card_5_title").textContent = json.title)
  );

fetch("https://jsonplaceholder.typicode.com/posts/10")
  .then((response) => response.json())
  .then(
    (json) => (document.querySelector(".card_5_body").textContent = json.body)
  );
