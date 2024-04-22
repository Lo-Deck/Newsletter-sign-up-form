# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot


![screenshot desktop](https://github.com/Lo-Deck/Newsletter-sign-up-form/blob/main/screenshot/Newsletter%20sign-up%20form-mobile.png).
![screenshot mobile](https://github.com/Lo-Deck/Newsletter-sign-up-form/blob/main/screenshot/Newsletter%20sign-up%20form-mobile-NoValidate.png).

![screenshot desktop-NoValidate](https://github.com/Lo-Deck/Newsletter-sign-up-form/blob/main/screenshot/Newsletter%20sign-up%20form-desktop-NoValidate.png).
![screenshot mobile-NoValidate](https://github.com/Lo-Deck/Newsletter-sign-up-form/blob/main/screenshot/Newsletter%20sign-up%20form-desktop.png).

![screenshot desktop-success](https://github.com/Lo-Deck/Newsletter-sign-up-form/blob/main/screenshot/Newsletter%20sign-up%20form%20with%20success%20message-desktop.png).
![screenshot mobile-success](https://github.com/Lo-Deck/Newsletter-sign-up-form/blob/main/screenshot/Newsletter%20sign-up%20form%20with%20success%20message-mobile.png).


### Links

- Solution URL: [Repositories](https://github.com/Lo-Deck/Newsletter-sign-up-form).
- Live Site URL: [Website](https://lo-deck.github.io/Newsletter-sign-up-form/).


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
-JS


### What I learned

I learned how to validate a `<form>` with `.addEventListener`, check validity with `if(!email.validity.valid)`.
After I extracted the address email from the url and displayed it on other page.
I tested the regex with `regex.test(url)` and `.split(regex)` to extract the email address. 


```js
    if(regexAt.test(email[1]))
    {
        email[1] = email[1].replace(regexAt, '@');  
    }

    displayEmail.innerText = email[1];
```


### Continued development

Learning from each challenge, I will continue to make website with JS and learning from different challenge from Front-end Mentor.


### Useful resources

- [Mozilla mdn](https://developer.mozilla.org/) - Very useful.


## Author

- Frontend Mentor - [@Lo-deck](https://www.frontendmentor.io/profile/Lo-Deck)


## Acknowledgments

Thanks to Front-end Mentor and its community.