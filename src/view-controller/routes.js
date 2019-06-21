import { components } from '../view-controller/index.js'
import { getPost} from '../controller/firebase.js';

const changeTmp = (hash) => {
    if (hash === '#/' || hash === '' || hash === '#') {
      return changeView('#/perfil');
    } else if (hash === '#/perfil' || hash === '#/home') {
      return changeView(hash);
    } else {
      return changeView('#/perfil');
    }
}

export const changeView = (route) => {
    const father = document.getElementById("father");
    father.innerHTML = '';
 switch (route) {
     case '#/home':  father.appendChild(components.home())
     break;
     case '#/registrate': father.appendChild(components.home2())
     break;
     case '#/perfil':
        getPost((data) => {
            father.innerHTML = '';
            father.appendChild(components.header(data))
            father.appendChild(components.body(data))
          })
      // if { user.id === id.usuarioActivo}      
       getPost((data) => {
         father.innerHTML = '';
         father.appendChild(components.header(data))
         father.appendChild(components.body(data))
       })
      
     break;
     default:
         break;
 }   
}

export const init = () => {
    window.addEventListener('load', changeTmp(window.location.hash))
    if (("onhashchange" in window)) window.onhashchange = () => changeTmp(window.location.hash)
}