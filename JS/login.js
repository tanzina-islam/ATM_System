document.getElementById('btn-submit').addEventListener('click',function () {
     
     const passwordField = document.getElementById('user-password');
     const password = passwordField.value;
     const emailField = document.getElementById('user-email');
     const email = emailField.value;

    if(email== "tanzina@gmail.com" && password=="tanzina1234"){
        window.location.href = 'bank.html';
    }
    else{
    alert("Invalid User");
    }
})