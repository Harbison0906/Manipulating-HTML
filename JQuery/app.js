let step1 = $('<section></section');
let heading1 = $('<h3>Objective 1:</h3>');
$(step1).append(heading1);
$('body').append(step1);

let btn1 = $('<button>Click Me!</button>');
$(step1).append(btn1);

$(btn1).click(function() {
  alert('This is a very nice message, indeed.');
})

