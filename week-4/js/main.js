// WEB303 Assignment 2
/*
When the user clicks on any of the 3 links in the #content-wrapper block, load the correct content into the #content div using AJAX. Once the content is loaded in, animate the div#content to display the newly loaded html using jQuery. You can choose to use any animation available to you except for .show(). When the user clicks another link, hide the 'div#content', clear its contents and load in the new content from the correct file. You wi l need to use AJAX to bring in content to the index file from either the prospect, convert or retain file, based on the link the user clicks on the index page (i.e. if they click a#prospect, you load in the content from the prospect.html file). Use the Ajax cals into javascript, NOT using the ajax commands built into jQuery.
*/

$(() => {
  // When the user clicks on the prospect link, load the prospect.html file into the #content div
  $('#prospect').on('click', function () {
    $.ajax({
      url: 'prospect.html',
      success: function (data) {
        $('#content').html(data);
      },
    });
  });
  // When the user clicks on the convert link, load the convert.html file into the #content div
  $('#convert').on('click', function () {
    $.ajax({
      url: 'convert.html',
      success: function (data) {
        $('#content').html(data);
      },
    });
  });
  // When the user clicks on the retain link, load the retain.html file into the #content div
  $('#retain').on('click', function () {
    $.ajax({
      url: 'retain.html',
      success: function (data) {
        $('#content').html(data);
      },
    });
  });
});
