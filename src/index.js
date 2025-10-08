import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Importa las funciones de Palindromo.js
import { preprocess, isPalindrome } from "./Palindromo.js";

document.addEventListener("DOMContentLoaded", () => {
  const inputText = document.getElementById("inputText");
  const checkBtn = document.getElementById("checkBtn");
  const resultCard = document.getElementById("resultCard");
  const clearBtn = document.getElementById("clearBtn");

  checkBtn.addEventListener("click", () => {
    const original = inputText.value.trim();
    if (!original) {
      resultCard.classList.remove("d-none", "alert-success");
      resultCard.classList.add("alert-warning");
      resultCard.innerHTML = "<strong>Ingrese una palabra u oración</strong>";
      return;
    }

    const processed = preprocess(original);
    const pal = isPalindrome(processed);

    resultCard.classList.remove("d-none", "alert-success", "alert-danger");
    if (pal) {
      resultCard.classList.add("alert-success");
      resultCard.innerHTML = `<strong class="result">Es un palíndromo</strong><br><small class="helper">Original:</small> ${original}`;
    } else {
      resultCard.classList.add("alert-danger");
      resultCard.innerHTML = `<strong class="result">No es palíndromo. intenta de nuevo</strong><br><small class="helper">Original:</small> ${original}`;
    }
  });

  clearBtn.addEventListener("click", () => {
    inputText.value = "";
    resultCard.classList.add("d-none");
  });
});