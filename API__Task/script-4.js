fetch("https://jsonplaceholder.typicode.com/posts/7")
  .then((response) => response.json())
  .then(
    (json) => (document.querySelector(".card_4_title").textContent = json.title)
  );

fetch("https://jsonplaceholder.typicode.com/posts/7")
  .then((response) => response.json())
  .then(
    (json) => (document.querySelector(".card_4_body").textContent = json.body)
  );
