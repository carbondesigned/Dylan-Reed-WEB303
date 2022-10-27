/*
    Assignment 05
*/

$(document).ready(function () {
  class ContentItem {
    constructor(id, name, description, category) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.category = category;
    }

    updateContentItem(id, name, description, category) {
      if (id === this.id) {
        if (name != null) {
          this.name = name;
        }
        if (description != null) {
          this.description = description;
        }
        if (category != null) {
          this.category = category;
        }
      }
    }

    toString() {
      return `<div class="content-item-wrapper" id="content-item-${this.id}">
                        <h2>${this.name}</h2>
                        <p>${this.description}</p>
                        <div>${this.category}</div>
                    </div>`;
    }
  }

  // In your script.js, create an array of 5 content items, populating them with content that fo lows a theme of your choosing (ex. 5 content items of marvel heros, but don't use marvel heros as your theme).
  let contentItems = [
    new ContentItem(0, 'The Flash', 'Berry Allen, Fastest man alive', 'DC'),
    new ContentItem(1, 'Thor', 'God of Thunder', 'MCU'),
    new ContentItem(2, 'Superman', 'Man of Steel', 'DC'),
    new ContentItem(3, 'Hulk', 'Always angry', 'MCU'),
    new ContentItem(4, 'Quick Silver', 'Slower than the Flash', 'MCU'),
  ];

  // Update the html file to display the name of your contents theme where indicated in the file.
  $('#content-theme').text('Content Theme');

  // Add each content item to your page in the div#content-item-list element using jQuery and leveraging your classes toString method.
  contentItems.forEach(function (item) {
    $('#content-item-list').append(item.toString());
  });

  // Use jQuery to also add the folowing to each content item's .content-item-wrapper:
  $('.content-item-wrapper').css({
    border: '1px solid black',
    width: '300px',
    padding: '10px',
    margin: '0 auto 10px auto',
  });

  // BONUS: (1 mark): Add two buttons to your page. One button, when clicked, tries to update a ContentItem in your array using the updateContentItem method successfuly. The other button, when clicked, tries to update a ContentItem in your array but is unsuccessful, given the limitations defined above for the updateContentItem method.
  $('#btn-success').click(function () {
    contentItems[0].updateContentItem(
      0,
      'Name 1 Updated',
      'Description 1 Updated',
      'Category 1 Updated'
    );
    $('#content-item-0').replaceWith(contentItems[0].toString());
  });
});
