$(function(){
eventHandlers();
displayPg();
});

function displayPg(){
  console.log("display page");

  //GET request
  $.get("/api/burgers").then(
    function(burgers) {
      console.log("burgers", burgers);
        
      //rendering template for burgers
      renderTemplate({burgers:burgers});
    }
  );
}

function renderTemplate(data){
    var source = $("#pg-template").text();
    var template= Handlebars.compile(source);
    var html = template(data);
    $("#app").html(html);
}

function eventHandlers(){
    $(document).on('submit', '.create-form', function(e) {
        event.preventDefault();
    
        var test = $('#burgerName').val().trim();
        var test2 = $('[name=eatDaBurgers]:checked').val().trim();
        var checked;
        
        if(test2 == 1){
            checked=true;
        }else{
            checked=false;
        }
        console.log(checked);
        var newBurger= {
            burger_name: test,
            eatEmUp: checked,
        }
        
        console.log('newBurger', newBurger);
        $.ajax('/api/burgers',
        {
            type:'POST',
            data: newBurger
        }).then(
            function() {
                displayPg();
            }
        )
    });
    $(document).on('click', '#stateChange', function (e) {
        event.preventDefault();
        var status = {
          eatEmUp: true
        }
        $.ajax('/api/burgers',
      {
        type: 'PUT',
        data: status
      })
      .then(
        function () {
          displayPg();
        }
      )
       });
  }


