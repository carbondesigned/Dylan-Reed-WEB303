(function(){
    var $imgs=$('#gallery img');
    var $buttons = $('#buttons');
    var tagged = {
    //     animators: [p1.jpg, p6.jpg, p9.jpg],
    //     designers: [p4.jpg, p6.jpg, p8.jpg],
    //     filmmakers: [p2.jpg,p3.jpg,p5.jpg],
    // illustrators: [p1.jpg,p9.jpg],
    // photographers:[p2.jpg, p3.jpg, p8.jpg] 
   }
   $imgs.each(function(){
    var img = this;
    var tags = $(this).data('tags');
    console.log(tags)
    if (tags){
        tags.split(',').forEach(function(tagName){
            if(tagged[tagName]== null){
                tagged[tagName]=[];
            }
            tagged[tagName].push(img)
        })
    }
   });
   $('<button/>', {
    text: 'Show All',
    class : 'active',
    click: function() {
        $(this).addClass('active').siblings().removeClass('active');
        $imgs.show();
    }
   }).appendTo($buttons);
   $.each(tagged, function(tagName){
    $('<button/>',{
        text: tagName + ' (' + tagged[tagName].length + ')',
        click: function(){
            $(this).addClass('active').siblings().removeClass('active');
            $imgs.hide().filter(tagged[tagName]).show();
        }

    }).appendTo($buttons);
   });
}())