(function(){
    var people = [
        {name:'Casey', rate: 60},
        {name:'Camille', rate: 80},
        {name:'Gordon', rate: 75},
        {name:'Nigel', rate: 120}];
    var slider = document.getElementById('slider');
    var rows = [],
      
      $table = $('#rates');

      function makeRows(){
        people.forEach(function(person){
            var $row = $('<tr></tr>');
            $row.append($('<td></td>').text(person.name));
            $row.append($('<td></td>').text(person.rate));

            rows.push({
                person: person,
                $element: $row
            });
           
        });
      }

      function appendRows(){
        var $tbody = $('<tbody></tbody>');
        rows.forEach(function(row){
            $tbody.append(row.$element);
        });
        $table.append($tbody);
      }

      function update(min, max){
        
        rows.forEach(function(row){
            
            if (row.person.rate >= min && row.person.rate <=max){
                row.$element.show();

            } else {
                row.$element.hide();
            }
        });
      }
       function init() {
        
       $('#slider').
       noUiSlider({
            range: {min:0, max:150}, start: [65, 90], handles: 2, margin:20, connect: true,step: 1);
           
            var slideVal = slider.noUiSlider.get(true);
            $('#value-min').text("Min"+slideVal[0]);
            makeRows();
            appendRows();
            update(slideVal[0],slideVal[1]);
       }
  $(function(){
    init();
    slider.noUiSlider.on('update',function(){
        
        var newVal = slider.noUiSlider.get(true);
        $('#value-min').text("Min"+newVal[0]);
        update(newVal[0],newVal[1]);
    });
  });     
}());