// WEB303 Assignment 2
$(document).ready(function () {
  $('#prospect').click(function () {
    $('#content').hide();
    $('#content').load('prospect.html', function () {
      $('#content').fadeIn(1000);
    });
  });
  $('#convert').click(function () {
    $('#content').hide();
    $('#content').load('convert.html', function () {
      $('#content').fadeIn(1000);
    });
  });
  $('#retain').click(function () {
    $('#content').hide();
    $('#content').load('retain.html', function () {
      $('#content').fadeIn(1000);
    });
  });
});
