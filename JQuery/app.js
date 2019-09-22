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

let step3 = $('<section></section>');
let heading3 = $('<h3>Objective 3:</h3>');
$(step3).append(heading3);
$('body').append(step3);

let div = $('<div></div>');
$(div).attr('id', 'colorDiv');
$(step3).append(div);

$(div).mouseover(function() {
  $(this).css('background-color', '#FFFFFF');
});
$(div).mouseleave(function() {
  $(this).css('background-color', '');
});