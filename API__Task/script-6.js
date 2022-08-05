fetch("https://jsonplaceholder.typicode.com/posts/12")
  .then((response) => response.json())
  .then(
    (json) => (document.querySelector(".card_6_title").textContent = json.title)
  );

fetch("https://jsonplaceholder.typicode.com/posts/12")
  .then((response) => response.json())
  .then(
    (json) => (document.querySelector(".card_6_body").textContent = json.body)
  );
