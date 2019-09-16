let step1 = document.createElement('section');
step1.id = 'step1';
document.body.prepend(step1);
let step2 = document.getElementById('step2');

let step3 = document.getElementById('step3');

let step4 = document.createElement('section');
step4.id = 'step4';
document.body.appendChild(step4);
let step5 = document.createElement('section');
step5.id = 'step5';
document.body.appendChild(step5);
let step6 = document.createElement('section');
step6.id = 'step6';
document.body.appendChild(step6);

let objective1 = document.createElement('h3');
let text1 = document.createTextNode('Objective 1:');
objective1.appendChild(text1);
step1.insertBefore(objective1, step1.childNodes[0]);


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
step2.insertBefore(objective2, step2.childNodes[1]);

let btnSubmit = document.getElementById('btnSubmit');

btnSubmit.addEventListener('click', function() {
let textField = document.getElementById('textField').value;
  alert(textField);
})

let objective3 = document.createElement('h3');
let text3 = document.createTextNode('Objective 3:');
objective3.appendChild(text3);
step3.insertBefore(objective3, step3.childNodes[0]);

let div = document.getElementById('div');

div.addEventListener('mouseover', function() {
  event.target.style.background = 'red';

  div.addEventListener('mouseleave', function() {
    event.target.style.background = '';
  })
});
let objective4 = document.createElement('h3');
let text4 = document.createTextNode('Objective 4:')
let para = document.createElement('p');
para.id = 'para';
let paraText = document.createTextNode('"This cosmic dance of bursting decadence and withheld permissions twists all our arms collectively, but if sweetness can win, and it can, then I\'ll still be here tomorrow, to high five you yesterday my friend. Peace." - Royal Tart Toter');
para.appendChild(paraText);
step4.appendChild(para);
objective4.appendChild(text4);
step4.insertBefore(objective4, step4.childNodes[0]);

function rand() {
  return Math.floor(Math.random() * 255);
}
para.addEventListener('click', function() {
  event.target.style.color = 'rgb(' + rand() + ',' + rand() + ',' + rand() + ')';
});





