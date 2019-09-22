// Objective 1 - a button that pulls an 
// alert window with a nice message when clicked

let step1 = $('<section></section');
let heading1 = $('<h3>Objective 1:</h3>');
$(step1).append(heading1);
$('body').append(step1);

let btn1 = $('<button>Click Me!</button>');
$(step1).append(btn1);

$(btn1).click(function() {
  alert('This is a very nice message, indeed.');
});

// Objective 2 - form with submit button 
// that pulls alert window when clicked 
// containing whatever is entered in the 
// text field

let step2 = $('<section></section');
let heading2 = ('<h3>Objective 2:</h3>');
$(step2).append(heading2);
$('body').append(step2);

let btn2 = $('#btnSubmit');
let textField = $('#textField');
$('body').append(textField);
$('body').append(btn2);

$(btn2).click(function() {
  alert(textField.val());
})

// Objective 3 - Make a div change color when mousing over

let step3 = $('#step3');
let heading3 = $('<h3>Objective 3:</h3>');
$(step3).append(heading3);
$('body').append(step3);

let div = $('#colorDiv');
$(step3).append(div);

$(div).mouseover(function() {
  $(this).css('background-color', '#FFFFFF');
});
$(div).mouseleave(function() {
  $(this).css('background-color', '');
});

// Objective 4 - Paragraph that changes color to random color

let step4 = $('<section></section>');
let heading4 = $('<h3>Objective 4:</h3>');
$(step4).append(heading4);
$('body').append(step4);

let tart = $('<img src="https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/7/7d/Toter.png/revision/latest?cb=20120713195935">')
$(step4).append(tart);

let para = $('<p>"This cosmic dance of bursting decadence and withheld permissions twists all our arms collectively, but if sweetness can win, and it can, then I\'ll still be here tomorrow, to high five you yesterday my friend. Peace." <br> - Royal Tart Toter</p>');
$(step4).append(para);

function rand() {
  return Math.floor(Math.random() * 255);
}
$(para).click(function() {
  $(this).css({'color': 'rgb(' + rand() + ',' + rand() + ',' + rand() + ')'});
});

//  Objective 5 - Button that adds a <span> with my name to an empty div

let step5 = $('<section></section>');
let heading5 = $('<h3>Objective 5:</h3>');
$(step5).append(heading5);
$('body').append(step5);

let btn3 = $('<button>Press</button>');
$(step5).append(btn3);

let square = $('<div></div>')
$(square).attr('id', 'square');
$(step5).append(square);

let name = $('<span>Seth Harbison</span>');

$(btn3).click(function() {
  $(square).append(name);
})

// Objective 6 - Button that adds friend names as list items
//  one at a time; button disables after last item is added

let step6 = $('<section></section>');
let heading6 = $('<h3>Objective 6:</h3>');
$(step6).append(heading6);
$('body').append(step6);

let btn4 = $('<button>Click This!</button>');
$(step6).append(btn4);

let list = $('<ul></ul>');
$(step6).append(list);

let counter = 0;

$(btn4).click(function() {
  let friends = ['Jake', 'Dub', 'Jonathan', 'Jesse', 'Michael', 'Clay', 'Adam', 'Justin', 'Reggie', 'Michael'];
  let item = $('<li></li>');
  $(item).text(friends[counter]);
  // $(item).text(friends[counter]);
  counter++
  $(list).append(item);
  if (counter >= 10) {
    $(btn4).attr("disabled","disabled");
  }
})