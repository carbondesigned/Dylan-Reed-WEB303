$(() => {
  $.getJSON('../characters.json', (characters) => {
    let row = $('<tr>');
    let name = $('<th>').html('<a href="#name">Name</a>');
    let realFirstName = $('<th>').html(
      '<a href="#realFirstName">Real First Name</a>'
    );
    let realLastName = $('<th>').html(
      '<a href="#realLastName">Real Last Name</a>'
    );
    let age = $('<th>').html('<a href="#age">Age</a>');
    row.append(name, realFirstName, realLastName, age);
    $('#characters').append(row);
    for (let i = 0; i < characters.length; i++) {
      let row = $('<tr>');
      let name = $('<td>').text(characters[i].name);
      let realFirstName = $('<td>').text(characters[i].real_first_name);
      let realLastName = $('<td>').text(characters[i].real_last_name);
      let age = $('<td>').text(characters[i].age);
      row.append(name, realFirstName, realLastName, age);
      $('#characters').append(row);
    }

    $('th').on('click', (event) => {
      let index = $(event.target).parent().children().index($(event.target));
      let firstRow = $('#characters tr:nth-child(1)');
      let firstRowValue = firstRow.children().eq(index).text();
      let rows = $('#characters tr').slice(1).get(); // [tr, tr, tr, ...]
      let timesClicked = $(event.target).data('clicks');
      console.log(timesClicked);

      // add &#x25B2; as an up arrow to the header and &#x25BC; as a down arrow

      if (timesClicked === undefined || timesClicked === 1) {
        firstRow.toggleClass('sort-asc');
        rows.sort((a, b) => {
          let A = $(a).children('td').eq(index).text().toUpperCase();
          let B = $(b).children('td').eq(index).text().toUpperCase();
          if (A < B) {
            return -1;
          }
          if (A > B) {
            return 1;
          }
          return 0;
        });
        $(event.target).data('clicks', 2);
      } else if (timesClicked === 2) {
        firstRow.toggleClass('sort-desc');
        rows.sort((a, b) => {
          let A = $(a).children('td').eq(index).text().toUpperCase();
          let B = $(b).children('td').eq(index).text().toUpperCase();
          if (A < B) {
            return 1;
          }
          if (A > B) {
            return -1;
          }
          return 0;
        });
        $(event.target).data('clicks', 1);
      } else {
        rows.sort((a, b) => {
          let A = $(a).children('td').eq(index).text().toUpperCase();
          let B = $(b).children('td').eq(index).text().toUpperCase();
          if (A < B) {
            return -1;
          }
          if (A > B) {
            return 1;
          }
          return 0;
        });
        $(event.target).data('clicks', 1);
      }

      $.each(rows, (_, row) => $('#characters').append(row));
    });
  });
});
