const p = document.createElement('p');
const h3 = document.createElement('h3')
const div = document.createElement('div')
const h1 = document.createElement('h1')
const paragraph = document.createElement('p')

// button Second
const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World');

// button third
// const button = document.querySelector('#button')
// button.addEventListener('click', () => {
//     alert('Hello World');
// })

button.addEventListener('click', function (e) {
    // console.log(e.target)
    e.target.style.background = 'blue';
})


p.textContent = "Ei, sou vermelho";
p.style.color = "red";

h3.textContent = "Eu sou h3 azul"
h3.style.color = "blue"

div.style.backgroundColor = "pink"
div.style.border = "1px solid black"

h1.textContent = "Estou em um div"
paragraph.textContent = "EU TAMBÉM!"

div.appendChild(h1)
div.appendChild(paragraph)



document.body.append(p);
document.body.append(h3)
document.body.append(div)


// Anexando ouvintes a grupos de nós
// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button")

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

    // and for each one we add a 'click' listener
    button.addEventListener('click', () => {
        alert(button.id);
    })
})