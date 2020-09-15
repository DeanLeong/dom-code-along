// let title = document.getElementById('title')
// console.log(title)

// let steve = document.getElementById('steve')
// console.log(steve)

const instructor = document.getElementsByClassName('instructor')
// console.log(instructor[0].nextSibling)

// for (let i = 0; i < instructor.length; i++) {
//   console.log(instructor[i].textContent)
// }

// instructor.forEach(person => console.log(person))

// const para = document.getElementsByTagName('p')
// console.log(para)

// const listItems = document.getElementsByTagName('li')
// console.log(listItems[2].textContent)

// listItems[2].textContent = 'Shay all Day!'


// Query Selector

let title = document.querySelector('#title')
// console.log(title)
console.log(title.innerHTML)
console.log(title.outerHTML)
console.log(title.textContent)
console.log(title.outerText)


// let instructor = document.querySelectorAll('.instructor')
// console.log(instructor)

// instructor.forEach(teach => console.log(teach.textContent))

let li = document.querySelectorAll('li')
// console.log(li[0].nextSibling)

// let mishaId = li[1].firstChild
// console.log(mishaId)


// mishaId.setAttribute('id', 'misha')
// mishaId.setAttribute('name', 'Micheal')
let img = document.createElement('img')
// console.log('Childless',title.children)
title.append(img)

// console.log('With Children',title.children)

// console.log('With Children',title.childNodes)

// console.log(mishaId.attributes)

img.setAttribute('src', 'https://images.unsplash.com/photo-1550907072-8aacc0737034?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80')


let steve = document.querySelector('li')
// console.log(steve)
steve.classList.add('instructor')
steve.className += ' popcorn'

steve.classList.remove('popcorn')

// img.classList.toggle('hidden')

let p = document.querySelector('p')
p.textContent = 'Hey! I know that building!'
p.style.backgroundColor = 'orange'
p.style.fontFamily = 'Helvetica'
// img.style.border = '5px solid red'
// img.style.display = 'none'
img.classList.add('img-style')
p.classList.add('img-style')