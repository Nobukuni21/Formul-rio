function validateForm(){
    var fname = doccument.getElementByid('fname').value.trim();
    var email = doccument.getElementByid('email').value.trim();
    var message = doccument.getElementByid('message').value.trim();

    if(fname === ''){
        alert('Campo obrigatório!');
        return false;
    }
    if(email === ''){
        alert('Campo obrigatório');
        return false;
    }
    if(message === ''){
        alert('Campo obrigatório');
        return false;
    } 
 
    return true;
    
}
