// Función para eliminar acentos
export function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Quita espacios, signos y convierte a minúsculas
export function preprocess(input) {
  let s = removeAccents(input);
  s = s.replace(/[^A-Za-z0-9Ññ]+/g, ""); // elimina signos y espacios
  return s.toLowerCase();
}

// Verifica si es palíndromo sin usar sort()
export function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;
  while (i < j) {
    if (str[i] !== str[j]) return false;
    i++;
    j--;
  }
  return true;
}
