var addItem = document.querySelectorAll(".catalog-button");
var add = document.querySelector(".modal-add");
var addClose = document.querySelector(".add__close");

addItem.forEach(function(addItem) {
  addItem.addEventListener("click", function (evt) {
    evt.preventDefault();
    add.classList.add("modal__show");
  });
});

addClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  add.classList.remove("modal__show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (add.classList.contains("modal__show")) {
      add.classList.remove("modal__show");
    }
  }
});
