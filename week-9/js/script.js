$(document).ready(function () {
  $('.tabs-list li a').click(function (e) {
    e.preventDefault();
  });

  $('.tabs-list li').click(function () {
    var tabid = $(this).find('a').attr('href');
    $('.tabs-list li,.tabs div.tab').removeClass('active'); // removing active class from tab

    $('.tab').hide(); // hiding open tab
    $(tabid).show(); // show tab
    $(this).addClass('active'); //  adding active class to clicked tab
  });

  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown);
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;
    ($this = $(this)), ($next = $this.next());

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
    }
  };

  var accordion = new Accordion($('#accordion'), false);
});
