// all Dom selectors.
// There are 5 ways in which you can select elements in a DOM using selectors.

document.getElementsByTagName()
document.getElementById('title').getAttribute('id')
// document.getElementById('title').setAttribute('class','test') note:this will overrite the current class hence be aware of this thing and add the original class after the editied class.
document.getElementById('title').setAttribute('class','test heading')

// we can alaso write styles to the titiles or any html
title.style.padding='green'

//  intresting scraping out conentent from html
// title.textContent ye sari chize return kardega matlab text se he .
// title.innerText ye sirf wahi return karega jo page pe he.

// title.innerHTML ye puri html tags ke sath sab return kar dega 


// query selectors
// document.querySelector('h1')  ye first h1 ko return karega.
document.querySelector('#title')
document.querySelector('.heading')










// document.getElementsByClassName() ye bhi same  html collection dega but is bar loops hi nahi he so we ahve to convert in into array like using Array.from(variable name )
document.getElementById()
document.querySelector()
// document.querySelectorAll()  ye nodelist return karta he and wo array nahi he .
// agar hame use akrna hi he to hame mention karna he kis elemnet ka karna he  ex[0]
