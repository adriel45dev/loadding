window.addEventListener("load", function () {
  showContent();
});

window.addEventListener("pageshow", function () {
  hideContent(showContent);
});

function showContent() {
  const content = document.body;
  content.classList.add("show");
}

function hideContent(callback) {
  const content = document.body;
  content.classList.remove("show");
  setTimeout(callback, 500); // Aguarda 0.5 segundos para executar o callback
}
