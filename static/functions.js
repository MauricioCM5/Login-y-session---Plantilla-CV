//validation functions for username and password on login and register pages

function validation_on_username(){
    let flag_username = true;
    let flag_password = true;
    
    if ((document.querySelector('#username').value).length < 8 ){
        flag_username = false;
        document.getElementById('text_alert').innerHTML = 'Please write a valid username';
    }
    else{ document.getElementById('text_alert').innerHTML = '';}


    if ((document.querySelector('#password').value).length < 8){
        flag_password = false;
        document.getElementById('text_alert2').innerHTML = '8 characters are required';
    }
    else { document.getElementById('text_alert2').innerHTML = '';}

    if (flag_username && flag_password) {
        document.getElementById('submit').disabled = false;
    }
};


