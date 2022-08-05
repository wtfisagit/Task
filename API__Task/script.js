fetch("https://jsonplaceholder.typicode.com/posts/2")
  .then((response) => response.json())
  .then(
    (json) => (document.querySelector(".card_1_title").textContent = json.title)
  );

fetch("https://jsonplaceholder.typicode.com/posts/2")
  .then((response) => response.json())
  .then(
    (json) => (document.querySelector(".card_1_body").textContent = json.body)
  );

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

document.querySelector(".card_1").addEventListener("click", function () {
  window.location.href = "1.html";
});

document.querySelector(".card_2").addEventListener("click", function () {
  window.location.href = "2.html";
});

document.querySelector(".card_3").addEventListener("click", function () {
  window.location.href = "3.html";
});

document.querySelector(".card_4").addEventListener("click", function () {
  window.location.href = "4.html";
});

document.querySelector(".card_5").addEventListener("click", function () {
  window.location.href = "5.html";
});

document.querySelector(".card_6").addEventListener("click", function () {
  window.location.href = "6.html";
});

document.querySelector(".card_7").addEventListener("click", function () {
  window.location.href = "7.html";
});

document.querySelector(".card_8").addEventListener("click", function () {
  window.location.href = "8.html";
});

document.querySelector(".card_9").addEventListener("click", function () {
  window.location.href = "9.html";
});
