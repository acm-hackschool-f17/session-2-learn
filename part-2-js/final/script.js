function setDate(){
  // Step 2: select the clock hands (seconds, minutes, hours) and store them into variables
  const secondHand = $('.second-hand');
  const minuteHand = $('.min-hand');
  const hourHand = $('.hour-hand');

  // Step 3: get the current time (in seconds, minutes, hours)
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Step 4: calculate the # of degrees (out of 360) 
  const secondsDegrees = ((seconds / 60) * 360 + 90) % 360;
  const minutesDegrees = ((minutes / 60) * 360 + 90) % 360;
  const hoursDegrees = ((hours / 24) * 360 + 90) % 360;

  // Step 5: change the clock hand css to transform to the correct # of degrees
  secondHand.css('transform', 'rotate(' + secondsDegrees + 'deg)');
  minuteHand.css('transform', 'rotate(' + minutesDegrees + 'deg)');
  hourHand.css('transform', 'rotate(' + hoursDegrees + 'deg)');

  console.log(hours + ':' + minutes + ':' + seconds);
}


// Steps 7-9: call the setDate function
// place the setDate function into an interval
// place the interval into a document ready function

$('document').ready(function() {

  setInterval(setDate, 1000);

});