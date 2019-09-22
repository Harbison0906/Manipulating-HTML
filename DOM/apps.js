// adding six sections to store each objective

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

// Objective 1 - a button that pulls an 
// alert window with a nice message when clicked

let objective1 = document.createElement('h3');
let text1 = document.createTextNode('Objective 1:');
objective1.appendChild(text1);
step1.insertBefore(objective1, step1.childNodes[0]);


let btn = document.createElement('button');
btn.id = 'button1';
let btnText = document.createTextNode('Click me!');


btn.appendChild(btnText);
step1.appendChild(btn);

btn.addEventListener('click', function () {
  alert('This is a nice alert message.');
})

// Objective 2 - form with submit button 
// that pulls alert window when clicked 
// containing whatever is entered in the 
// text field

let objective2 = document.createElement('h3');
let text2 = document.createTextNode('Objective 2:');
objective2.appendChild(text2);
step2.insertBefore(objective2, step2.childNodes[1]);

let btnSubmit = document.getElementById('btnSubmit');

btnSubmit.addEventListener('click', function () {
  let textField = document.getElementById('textField').value;
  alert(textField);
})

// Objective 3 - Make a div change color when mousing over

let objective3 = document.createElement('h3');
let text3 = document.createTextNode('Objective 3:');
objective3.appendChild(text3);
step3.insertBefore(objective3, step3.childNodes[0]);

let div = document.getElementById('div');

div.addEventListener('mouseover', function () {
  event.target.style.background = 'red';

  div.addEventListener('mouseleave', function () {
    event.target.style.background = '';
  })
});

// Objective 4 - Paragraph that changes color to random color

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
para.addEventListener('click', function () {
  event.target.style.color = 'rgb(' + rand() + ',' + rand() + ',' + rand() + ')';
});

//  Objective 5 - Button that adds a <span> with my name to an empty div

let objective5 = document.createElement('h3');
let text5 = document.createTextNode('Objective 5:');
objective5.appendChild(text5);

let btn3 = document.createElement('button');
btn3.id = 'button3';
let btn3Text = document.createTextNode('Click me!');

btn3.appendChild(btn3Text);

let nameBox = document.createElement('div');
nameBox.id = 'name';
let span = document.createElement('span');
span.id = 'nameSpan';
let spanText = document.createTextNode('Seth Harbison');

span.appendChild(spanText);

step5.appendChild(btn3);
step5.appendChild(nameBox);
step5.insertBefore(objective5, step5.childNodes[0]);

btn3.addEventListener('click', function () {
  nameBox.appendChild(span);
})

// Objective 6 - Button that adds friend names as list items
//  one at a time; button disables after last item is added

let objective6 = document.createElement('h3');
let text6 = document.createTextNode('Objective 6:')
objective6.appendChild(text6);

let btn4 = document.createElement('button');
btn4.id = 'button4';
let btn4Text = document.createTextNode('Click me, too!');
btn4.appendChild(btn4Text);
btn4.disabled = false;



step6.appendChild(btn4);
step6.insertBefore(objective6, step6.childNodes[0]);

let list = document.createElement('ul');
step6.appendChild(list);

let counter = 0;
btn4.addEventListener('click', function () {
  let friends = ['Jake', 'Dub', 'Jonathan', 'Jesse', 'Michael', 'Clay', 'Adam', 'Justin', 'Reggie', 'Michael'];
  let item = document.createElement('li');
  let liText = document.createTextNode(friends[counter]);
  item.appendChild(liText);
  counter++;
  list.appendChild(item);
  if (counter >= 10) {
    btn4.disabled = true;
  }
});













