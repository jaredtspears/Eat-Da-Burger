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

function renderTemplate(){
    var source = $("#pg-templage").text();
    var template= Handlebars.compile(source);
    var html = template(data);
    $("#app").html(html);
}

function eventHandlers(){
    $(document).on('submit', '.create-form', function(e) {
        event.preventDefault();
        var newBurger= {
            burger_name: $('#burgerName').val().trim(),
            eatDaBurger: $('[name=eatDaBurger]').val().trim()
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
    $(document).on('click', '.eatBurger', function (e) {
        event.preventDefault();
        var status = {
          eatDaBurgers: true
        }
        $.ajax('/api/burgers',
      {
        type: 'PUT',
        data: status
      }).then(
        function () {
          displayPage();
        }
      )
       });
  }


