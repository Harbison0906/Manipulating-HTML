let step1 = document.getElementById('step1');
let step2 = document.getElementById('step2');
let step3 = document.getElementById('step3');
let step4 = document.getElementById('step4');
let step5 = document.getElementById('step5');
let step6 = document.getElementById('step6');

let objective1 = document.createElement('h3');
let text1 = document.createTextNode('Objective 1:');
objective1.appendChild(text1);
step1.appendChild(objective1);


let btn = document.createElement('button');
btn.id = 'button1';
let btnText = document.createTextNode('Click me!');


btn.appendChild(btnText);
step1.appendChild(btn);

btn.addEventListener('click', function() {
  alert('This is a nice alert message.');
})

let objective2 = document.createElement('h3');
let text2 = document.createTextNode('Objective 2:');
objective2.appendChild(text2);
step2.prepend(objective2);

let btnSubmit = document.getElementById('btnSubmit');

btnSubmit.addEventListener('click', function() {
let textField = document.getElementById('textField').value;
  alert(textField);
})




