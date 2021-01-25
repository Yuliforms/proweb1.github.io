
// Initialize Cloud Firestore through Firebase
  var firebaseConfig = {
    apiKey: "AIzaSyAC55B3ay_guu81il9ZTc985iTdIlav2jk",
    authDomain: "proweb1-d3e09.firebaseapp.com",
    projectId: "proweb1-d3e09",
    storageBucket: "proweb1-d3e09.appspot.com",
    messagingSenderId: "446828240051",
    appId: "1:446828240051:web:a9d2e93047edbf41fa64c6",
    measurementId: "G-RL6J79H1NK"
  };

firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

function Registrar_admin(){

  	var email = document.getElementById("emailAdmin").value
  	var nombre = document.getElementById("nameAdmin").value
  	var password= document.getElementById("passwordAdmin").value

  	if(email == "" || email == null){
  		alert("Sin informacion de email, favor de verificarlo");
  	}else{
  		  db.collection("Administradores").add({

    Email: email,
    Password: password,
    Nombre: nombre
})
.then(function(docRef) {
    alert("El administrador se agrego correctamente");
})
.catch(function(error) {
    console.error("Error¡¡ ", error);
});

  	}

 }
