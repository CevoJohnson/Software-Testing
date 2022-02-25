// select all the buttons
const buttons = document.querySelectorAll('button');
// select the <input type="text" class="display" disabled> element
const display = document.querySelector('.display');
storedval = "";

// add eventListener to each button
function startUpCalculator(){
	buttons.forEach(function(button) {
	  button.addEventListener('click', calculate);
	});
}

// calculate function
function calculate(event) {
  // current clicked buttons value
  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {
    check = storedval + display.value
    console.log(eval(check));
    // check if the display is not empty then only do the calculation
    if (display.value !== '') {
      // calculate and show the answer to display
      display.value = eval(display.value);
    } 
  
  } else if (clickedButtonValue === 'C') {
    // clear everything on display
    display.value = '';
  } else {
    // otherwise concatenate it to the display
    display.value += clickedButtonValue;
  }
if (clickedButtonValue === ('√')){
    test = display.value.slice(0,display.value.length -1)
    console.log(test)
    display.value = Math.sqrt(test);
    }
if(clickedButtonValue === '+/-'){
  test = display.value.slice(0,display.value.length -3)
  console.log(test.slice(0, test.length-1))
  display.value = -(test);
}
if(clickedButtonValue === 'M-'){
  test = display.value.slice(0,display.value.length -2)
  checker = test - ((eval(check)));
  display.value = (eval(checker));
}
if(clickedButtonValue === 'M+'){
  test = display.value.slice(0,display.value.length -2)
  checker = parseInt(test) + parseInt((eval(check)));
  display.value = (checker);
  console.log(eval(check))
  console.log(checker)
}
if(clickedButtonValue === 'MRC'){
  display.value = (eval(check));


}
}



startUpCalculator();