"use strict";

const btn = document.querySelector(".btn_menu");

const menu = document.querySelector(".main-menu");

// Lav funktionen "toggleMenu()" med følgende funktionalitet
// Funktionen "toggleMenu()" laves med følgende funktionalitet a, b, c
function toggleMenu() {
  // a) toggle klassen "shown" på menu vha. classList.toggle
  // gør at den fjerne og forsvinder menuen ved at toggle klassen "shown" på menu
  menu.classList.toggle("shown");

  // b) Laver variablen "menuShown", som siger, at menu-variablen indeholder klassen "shown" via classList.contains("")
  const menuShown = menu.classList.contains("shown");

  // c) spørger om "menuShown" og udskifter teksten via toggle-btn.

  if (menuShown) {
    console.log(menuShown); // se i konsollen
    btn.textContent = "LUK";
    // sætter btn.textContent til "Luk", hvis menuShown er "true"
  } else {
    console.log(menuShown); // se i konsollen
    btn.textContent = "MENU";
    // sæt btn.textContent til "Menu", hvis menuShown er "false"
  }
  // "toggleMenu()" slutter her
}

// Tilføjer et klik-event til "btn", der sætter toggleMenu-funktionen i gang
btn.addEventListener("click", toggleMenu);
