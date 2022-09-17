/*
	WEB 303 Assignment 1 - jQuery
	Dylan Reed  
*/

$(() => {
  console.log('ready!');
});

// difference between keydown vs. change
// keydown is triggered when a key is pressed
// change is triggered when the value of an element is changed/when an input is blurred.

$('#yearly-salary, #percent').keydown(() => {
  let salary = $('#yearly-salary').val();
  let percent = $('#percent').val();
  // calculate the amount using toFixed
  let amount = ((salary * percent) / 100).toFixed(2);
  $('#amount').text('$' + amount);
});
// $('#yearly-salary, #percent').change(() => {
//   let salary = $('#yearly-salary').val();
//   let percent = $('#percent').val();
//   let amount = (salary * percent) / 100;
//   $('#amount').text('$' + amount);
// });
