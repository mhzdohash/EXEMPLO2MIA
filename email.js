function loginEmail(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    firebase.auth().signInwithEmailAndPassword(email,password).then(()=>{
        alert('Usuário logado');    
    })
    .cath(err =>{
        console.log('error', error)
    })
}