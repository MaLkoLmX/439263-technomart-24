var link = document.querySelector(".contacts__button");
var popup = document.querySelector(".modal__form");
var close = document.querySelector(".button-close");

var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=text]");
var form = popup.querySelector("form");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal__show");
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal__show");
  popup.classList.remove("modal__error");
});

form.addEventListener("submit", function (evt) {
  if (!login.value || !email.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("modal__error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal__error");
    console.log("Нужно ввести логин и пароль");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal__show")) {
      popup.classList.remove("modal__show");
      popup.classList.remove("modal__error");
    }
  }
});


var mapLink = document.querySelector(".contacts__map-modal");
var map = document.querySelector(".modal__map");
var mapClose = map.querySelector(".modal__map-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.add("modal__show-map");
});

mapClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  map.classList.remove("modal__show-map");
});

window.addEventListener("keydown", function (evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (map.classList.contains("modal__show-map")) {
      map.classList.remove("modal__show-map");
    }
  }
});

var addItem = document.querySelectorAll(".catalog-button");
var add = document.querySelector(".modal-add");
var addClose = document.querySelector(".add__close");

addItem.addEventListener("click", function (evt) {
  evt.preventDefault();
  add.classList.add("modal__show");
});

addClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  add.classList.remove("modal__show");
});

window.addEventListener("keydown", function (evt) {
  evt.preventDefault();
  if (evt.keyCode === 27) {
    if (add.classList.contains("modal__show")) {
      add.classList.remove("modal__show");
    }
  }
});
