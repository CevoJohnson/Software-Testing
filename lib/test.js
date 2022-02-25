function calculate(event) {
    // current clicked buttons value
    const clickedButtonValue = event.target.value;
    test = "something";
  
    if (clickedButtonValue === '=') {
      console.log(display.value)
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
    if (clickedButtonValue.contains('√')){
        
  
      }
  }
  