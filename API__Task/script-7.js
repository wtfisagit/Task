fetch("https://jsonplaceholder.typicode.com/posts/11")
  .then((response) => response.json())
  .then(
    (json) => (document.querySelector(".card_7_title").textContent = json.title)
  );

fetch("https://jsonplaceholder.typicode.com/posts/11")
  .then((response) => response.json())
  .then(
    (json) => (document.querySelector(".card_7_body").textContent = json.body)
  );
