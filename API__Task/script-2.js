fetch("https://jsonplaceholder.typicode.com/posts/4")
  .then((response) => response.json())
  .then(
    (json) => (document.querySelector(".card_2_title").textContent = json.title)
  );

fetch("https://jsonplaceholder.typicode.com/posts/4")
  .then((response) => response.json())
  .then(
    (json) => (document.querySelector(".card_2_body").textContent = json.body)
  );
