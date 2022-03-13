# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- HTML Markup
- CSS styling
- JavaScript functionality
- API call

### Screenshot

![](./design/Screenshot%202022-03-13%20at%2014-25-04%20Frontend%20Mentor%20Advice%20generator%20app.png)

### Links

- Solution URL: [GitHub Repository](https://github.com/Fleexie/advice-generator-app)
- Live Site URL: [GitHub Pages](https://fleexie.github.io/advice-generator-app/)

## My process

### Built with

- Semantic HTML5 markup
- SCSS 
- Flexbox
- Mobile-first workflow
- JavaScript


### What I learned

```js
async function getAdvice(){
  let advice = await fetch('https://api.adviceslip.com/advice')
  populateInformation(advice)
}
getAdvice();

const adviceID = document.querySelector("#advice_id")
const adviceTEXT = document.querySelector("#advice_text")

function populateInformation(info){
  info.json().then(response =>{
    adviceID.innerHTML = 'Advice #' + response.slip["id"]
    adviceTEXT.innerHTML = '"' + response.slip["advice"] + '"'
  })
}
}
```

### Continued development

Continue working on JavaScript Aync functionality and API calls/handling

## Author

- Website - [FleexieDesigns](https://fleexiedesigns.com/)
- Frontend Mentor - [@Fleexie](https://www.frontendmentor.io/profile/Fleexie)

