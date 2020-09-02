/* https://github.com/RyanMillerC/give-back-browser-control */

/* Re-enable copy/cut/paste on input fields */
const inputs = document.querySelectorAll('input');
inputs.forEach(input => {
  input.removeAttribute('oncopy');
  input.removeAttribute('oncut');
  input.removeAttribute('onpaste');
});

/* Re-enable default right-click behavior */
const body = document.querySelector('body');
body.removeAttribute('oncontextmenu');
