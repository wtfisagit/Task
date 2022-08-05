fetch("https://jsonplaceholder.typicode.com/posts/5")
  .then((response) => response.json())
  .then(
    (json) => (document.querySelector(".card_3_title").textContent = json.title)
  );

fetch("https://jsonplaceholder.typicode.com/posts/5")
  .then((response) => response.json())
  .then(
    (json) => (document.querySelector(".card_3_body").textContent = json.body)
  );
