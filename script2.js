
const displayEmail = document.querySelector('.emailHere');

const url = window.location.href;

const regex = /email=/;

const regexAt = /%40/;


if(regex.test(url))
{

    const email = url.split(regex);

    if(regexAt.test(email[1]))
    {
        email[1] = email[1].replace(regexAt, '@');  
    }

    displayEmail.innerText = email[1];

}


