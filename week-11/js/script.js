/* 
    - Store the data for these characters in a JSON file, and retrive it using a jQuery ajax method of your choosing. ('../characters.json')
    - Add the ability for a user to search for a character by their first name at the top of the page, above the table.
    - If any part of the string the user enters is contained in any characters `real_first_name` OR `name`, highlight all the applicable characters rows by setting the background colour of each of the cels in the row to a dark green, and the text to white. 
    - Remove the highlight, and reset the font colour to black, once the search term is no longer contained in the characters `real_first_name` OR `name`
    - Add two filter buttons below your table, one that narrows down your table of characters to only ones where their `real_last_name` OR `name` starts with a letter between A and M inclusively, and another that narrows down your table or characters if their last name starts with a letter between N and Z inclusively. - This filter should not remove or destroy the table rows that are outside of the filters range, but should just hide and show them

    - Inside of each button, include a number in brackets that indicates how many characters fall into that filter. For example, if you have 4 last names that start with a letter from A to M, and 3 that start with N to Z, your buttons would look something like this
        - <button>Filter A-M (4)</button> <button>Filter N-Z (3)</button>
*/

$(() => {
  $.getJSON('../characters.json', (data) => {
    console.log(data);
    for (let i = 0; i < data.length; i++) {
      let row = $('<tr>');
      let name = $('<td>').text(data[i].name);
      let realFirstName = $('<td>').text(data[i].real_first_name);
      let realLastName = $('<td>').text(data[i].real_last_name);
      let image = $('<td>').append($('<img>').attr('src', data[i].image));
      let description = $('<td>').text(data[i].description);
      row.append(name, realFirstName, realLastName, image, description);
      $('#characters').append(row);
    }
  });

  $('#search').on('keyup', (event) => {
    let search = $('#search').val().toLowerCase();
    $('tr').each((index, element) => {
      let row = $(element);
      let name = row.find('td:nth-child(1)').text().toLowerCase();
      let realFirstName = row.find('td:nth-child(2)').text().toLowerCase();
      if (
        (name.includes(search) || realFirstName.includes(search)) &&
        search.length > 0
      ) {
        row.css('background-color', 'green');
        row.css('color', 'white');
      } else {
        row.css('background-color', 'white');
        row.css('color', 'black');
      }
    });
  });

  $('#filterA-M').on('click', (event) => {
    $('tr').each((index, element) => {
      let row = $(element);
      let realLastName = row.find('td:nth-child(3)').text().toLowerCase();
      if (realLastName >= 'a' && realLastName <= 'm') {
        row.show();
      } else {
        row.hide();
      }
    });
    $('#filterA-M').text(`Filter A-M ${$('#characters tr:visible').length}`);
  });

  $('#filterN-Z').on('click', (event) => {
    $('tr').each((index, element) => {
      let row = $(element);
      let realLastName = row.find('td:nth-child(3)').text().toLowerCase();
      if (realLastName >= 'n' && realLastName <= 'z') {
        row.show();
      } else {
        row.hide();
      }
    });
    $('#filterN-Z').text(`Filter N-Z ${$('#characters tr:visible').length}`);
  });

  $('#clear').on('click', (event) => {
    $('tr').each((index, element) => {
      let row = $(element);
      row.show();
    });
  });
});
