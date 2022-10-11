/* 

2 - Create two methods outside of the jQuery ready function, one for the $.getJSON request outlined below, and the second for your $.ajax request below. You can name these methods whatever you like. 2a - Inside the first method, use the $.getJSON() method to get the team.json file. 

2b - Once that method executes, use the $.each() method to loop through the elements of the array in the object that was returned by the server. 

2c - For each object in the array, insert the name, position, and bio into the div#team. Put the name in an h2 tag, the position in an h5 tag, and the bio in a p tag. 

3a - Inside your second method, use the $.ajax() method using the HTTP "get" type to retrieve the data from the team.json file. 

3b - Add a calback that runs before you send the ajax request. Display the text "Loading..." in the div#team. 

3c - Add an error calback to display an error message inside of the div#team if it is invoked, stating the content could not be retrieved. 

3d - If the content does come back successfuly, display the data in the same way as described above in part 2c. Make sure you remove the "Loading..." message once you display the data. Call one of the methods, in a ready function, to actualy run the code and have the information displayed on the page (it doesn't matter which, I will be testing both anyway). 

BONUS (1 mark): In your ajax cal, find a way to delay the content being displayed on the page, so that the loading message is visible for 3 seconds before it is removed and replaced by the content that came back from the json file.

*/

$(() => {
  $.getJSON('js/team.json', (data) => {
    $.each(data, (i, item) => {
      $('#team').append(
        `<h2>${item.name}</h2><h5>${item.position}</h5><p>${item.bio}</p>`
      );
    });
  });

  $.ajax({
    url: 'js/team.json',
    type: 'get',
    beforeSend: () => {
      $('#team').html('Loading...');
    },
  })
    .done((data) => {
      setTimeout(() => {
        $.each(data, (i, item) => {
          $('#team').append(
            `<h2>${item.name}</h2><h5>${item.position}</h5><p>${item.bio}</p>`
          );
        });
      }, 3000);
    })
    .fail(() => {
      $('#team').html('Error');
    });
});
