const firebaseConfig = {
    apiKey: "AIzaSyDVWwtP9Jk8HvEkIDVIhEmBCbaIsjkLozI",
    authDomain: "projeto2miateste-a5e13.firebaseapp.com",
    projectId: "projeto2miateste-a5e13",
    storageBucket: "projeto2miateste-a5e13.appspot.com",
    messagingSenderId: "783565161117",
    appId: "1:783565161117:web:278a3831425d90cf968a74"
  };

  firebase.initializeApp(firebaseConfig);

  const emailField = document.getElementById('email');
  const passwordField = document.getElementById('password');
  const loginButton = document.getElementById('loginButton')

  loginButton.addEventListener('click', ()=>{
    const email = emailField.value;
    const password = passwordField.value;

    firebase.auth().signInWithEmailAndPassword(email,password)
    .then((userCredential)=>{
      const user = userCredential.user;
      console.log("Usuário logado : ", user)
    })
    .catch((error)=>{
      const errorMessage = error.message;
      console.error("Erro de autentificação : ", errorMessage)
    });

  });