// Registrar usuarios:
export const NewUsers = (email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
 };

 // iniciar Sesión:
 export const LogUsers = (email, password)=> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
 }

 // Cerrar sesión: 
 export const signOut = () => firebase.auth().signOut()

 //Login con google
 export const LogGoogle = () => {
   const provider = new firebase.auth.GoogleAuthProvider();
   return firebase.auth().signInWithPopup(provider)
 }

 //Login con facebook
 export const LogFacebook = () => {
   const provider = new firebase.auth.FacebookAuthProvider();
   return firebase.auth().signInWithPopup(provider)
   }

//Agregar post:
   export const dataPost = (content,uid) => {
      return firebase.firestore().collection("notas").add ({
         nota: content,
         userId: uid,
      })
   }
   
//Leer documentos   
  export const getPost = (callback) => {
   firebase.firestore().collection("notas")
   .onSnapshot((querySnapshot) => {
      const data = [];
      querySnapshot.forEach((doc) => {
        doc.privacidad === 'publico '
         data.push({ id: doc.id, ...doc.data() })
      });
      callback(data);
   });
} 

//Eliminar notas:
export const deletePost = (idPost) => {
   return firebase.firestore().collection("notas").doc(idPost).delete()
}

/* editar notas: */
export const editarPost = (idPost, nuevo) => {
   return firebase.firestore().collection("notas").doc(idPost).update({
     nota: nuevo,  
})
}

//Agregar usuarios:
export const dataBase = (name, lastName, emailRegister, cred) => {
      return firebase.firestore().collection("users").doc(cred.user.uid).set({
         Nombre : name,
         Apellido : lastName,
         Email : emailRegister,
         idUser: cred.user.displayName,
      });
}

// imprimir usuario:
export const getUserFirestore = (uid) => {
   return firebase.firestore().collection("users").doc(uid).get();
}

//Leer documento usuario:
export const getUser = (uid, callback) => {
   firebase.firestore().collection("users").doc(uid)
   .onSnapshot(doc => {
      const data = doc.data();
      callback(data)
   });
}

//Usuario activo:
export const usuarioActivo = () => {
   return firebase.auth().currentUser;
}

//observador:
export const observador = () => {
   return firebase.auth().onAuthStateChanged();
}