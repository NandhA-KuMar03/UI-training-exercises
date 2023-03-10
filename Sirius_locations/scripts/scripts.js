$(document).ready(function(){

// The about us page when the page is loaded
    function load(){
        $(".parent *").remove();
        $(".button-container button").removeClass("active");
        $("#aboutUsButton").addClass("active");
        let $aboutUsContainer = $("<div>");
        let $aboutUsDescription = $("<p></p>").text(about.description);
        $aboutUsDescription.addClass("about-us-description");

        // IMage in about us page
        let $aboutUsImageContainer = $("<div></div>").addClass("about-us-image-container");
        let $aboutUsImage = $("<img></img>").attr("src","../assets/images/aboutUs.png");
        $aboutUsImageContainer.append($aboutUsImage);
        $aboutUsContainer.append($aboutUsImageContainer , $aboutUsDescription)
        $(".parent").prepend($aboutUsContainer);
    }
    load();

    $("#aboutUsButton").click(function(){
        load();
    });

// The solution content when solution button is clicked
    $("#solutionButton").click(function(){
        $(".parent *").remove();
        $(".button-container button").removeClass("active");
        $("#solutionButton").addClass("active");
        let $acc = $("<div id='accordion'>");
// Three accordion classes when solution button is clicked
        let $digitalExperienceTitle = $("<h3>");
        $digitalExperienceTitle.text("DIGITAL EXPERIENCE");
        let $digitalExperienceDescription = $("<p>").addClass("accordion-para");
        $digitalExperienceDescription.text(accordion.digitalExperience);

        let $informationTechnology = $("<h3>");
        $informationTechnology.text("INFORMATION TECHNOLOGY");
        let $informationTechnologyDescription= $("<p>").addClass("accordion-para");
        $informationTechnologyDescription.text(accordion.informationTechnology);

        let $managedServices = $("<h3>");
        $managedServices.text("MANAGED SERVICES");
        let $managedServicesDescription = $("<p>").addClass("accordion-para");
        $managedServicesDescription.text(accordion.managedServices);
        $acc.append($digitalExperienceTitle , $digitalExperienceDescription , $informationTechnology ,$informationTechnologyDescription , $managedServices ,$managedServicesDescription );
        $(".parent").append($acc);
        $('#accordion').accordion();
    });
    
// This function runs when location button is clicked
    $("#locationButton").click(function(){
        $(".parent *").remove();
        let $locationsContainer = $("<div>");
        $(".button-container button").removeClass("active");
        $("#locationButton").addClass("active");
        var $table = $('<table/>').addClass("locations-table");
        // The table tag for the list of locations 
        locations.forEach(element => {
            $table.append('<tr><td><img src="../assets/images/flag.png'  +  '"</img></td><td>' + element.state +  '</td><td>' + element.city + '</td><td>' + element.contact + '</td></tr>');
        });
        $locationsContainer.append($table);
        $(".parent").prepend($locationsContainer);
    });
});