$(document).ready(function(){

    // Tabs and accordion Jquery Ui
    $( function() {
        $('#tabs').tabs({
            active: 0
          });
    } );

    $( function() {
        $( "#accordion" ).accordion({
            heightStyle: "content"
          });
    } );

    // Location content dynamically constructed from json
    var $table = $('<table/>').addClass("locations-table");
        // The table tag for the list of locations 
        locations.forEach(element => {
        $table.append('<tr><td><img src="../assets/images/flag.png'  +  '"</img></td><td>' + element.state +  '</td><td>' + element.city + '</td><td>' + element.contact + '</td></tr>');
    });
    $("#tabs-3").append($table);
    
});