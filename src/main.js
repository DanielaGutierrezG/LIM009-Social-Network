
import {  init} from './view-controller/routes.js';


const registrar = () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('contraseña').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }

const ingreso = () => {
    const email2 = document.getElementById('email2').value;
    const password2 = document.getElementById('contraseña2').value;

window.addEventListener('load', () => {
  initFirebase()

  init()
 
 /*  const FatherElement = document.getElementById('father'); 
  FatherElement.appendChild(Home()); */
  
})
