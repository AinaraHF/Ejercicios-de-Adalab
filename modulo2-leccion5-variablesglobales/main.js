// modificamos una variable de ámbito global
let secretLetter = 'y';
function mySecretLetter() {
  secretLetter = 'x';
  return secretLetter;
}
console.log(secretLetter); // devuelve "x" al cambiar el orden aparece y porque está cogiendo la variable global, no la que está dentro de la función
console.log(mySecretLetter()); // devuelve "x"
