let h3 = document.createElement('h3');
let h3Text = document.createTextNode('Objective 1:')
h3.appendChild(h3Text);
document.body.appendChild(h3);

let btn = document.createElement('button');
btn.id = 'button1'
let btnText = document.createTextNode('Click me!');

btn.appendChild(btnText);
document.body.appendChild(btn);

btn.addEventListener('click', function() {
  alert('This is a nice alert message.');
})