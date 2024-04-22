
const myForm = document.getElementById('myForm');

const error = document.querySelector('.messError');

const messageError = document.querySelector('form span');


myForm.addEventListener('submit', function(event){

    if(!email.validity.valid)
    {
   
        messageError.innerText = 'Valid email required';

        event.preventDefault();

    }

    else
    {
        messageError.innerText = '';
    }

});




