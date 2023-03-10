$(document).ready(function(){
    $("#aboutUsButton").attr("autofocus" , true);
    $("#aboutUsButton").click(function(){
        $(".parent").empty();
        $(".button-container button").removeClass("active");
        $("#aboutUsButton").addClass("active");
        let aboutUsDescription = $("<p></p>").text(about.description);
        aboutUsDescription.addClass("about-us-description");
        $(".parent").append(aboutUsDescription);
        let aboutUsImageContainer = $("<div></div>").addClass("about-us-image-container");
        let aboutUsImage = $("<img></img>").attr("src","../assets/images/aboutUs.png");
        $(aboutUsImageContainer).append(aboutUsImage);
        $(".parent").append(aboutUsImageContainer);
    });

    $("#solutionButton").click(function(){
        $(".parent").empty();
        $(".button-container button").removeClass("active");
        $("#solutionButton").addClass("active");

        
        let $accordionContainer = $("<div>").addClass("accordion-container");
        let $digitalExperienceContainer = $("<div>");
        let $digitalExperienceTitle = $("<h5>").addClass("acc-slide-down");
        $digitalExperienceTitle.text("DIGITAL EXPERIENCE");
        let $digitalExperienceDescription = $("<p>").addClass("accordion-para");
        $digitalExperienceDescription.text(accordion.digitalExperience);

        let $informationTechnologycontainer = $("<div>");
        let $informationTechnologyTitle = $("<h5>").addClass("acc-slide-down");
        $informationTechnologyTitle.text("INFORMATION TECHNOLOGY");
        let $informationTechnologyDescription = $("<p>").addClass("accordion-para");
        $informationTechnologyDescription.text(accordion.informationTechnology);

        let $qualityAssuracneContainer = $("<div>");
        let $qualityAssuracneTitle = $("<h5>").addClass("acc-slide-down");
        $qualityAssuracneTitle.text("QUALITY ASSURANCE");
        let $qualityAssuracneDescription = $("<p>").addClass("accordion-para");
        $qualityAssuracneDescription.text(accordion.qualityAssuracne);

        let $managedServicesContainer = $("<div>");
        let $managedServicesTitle = $("<h5>").addClass("acc-slide-down");
        $managedServicesTitle.text("MANAGED SERVICES");
        let $managedServicesDescription = $("<p>").addClass("accordion-para");
        $managedServicesDescription.text(accordion.managedServices);

        $digitalExperienceContainer.append($digitalExperienceTitle , $digitalExperienceDescription);
        $informationTechnologycontainer.append($informationTechnologyTitle , $informationTechnologyDescription);
        $qualityAssuracneContainer.append($qualityAssuracneTitle , $qualityAssuracneDescription);
        $managedServicesContainer.append($managedServicesTitle , $managedServicesDescription);

        $accordionContainer.append($digitalExperienceContainer , $informationTechnologycontainer,$qualityAssuracneContainer,$managedServicesContainer);
        $(".parent").append($accordionContainer);
    });
    

    $("#locationButton").click(function(){
        $(".parent").empty();
        $(".button-container button").removeClass("active");
        $("#locationButton").addClass("active");
        var $table = $('<table/>').addClass("locations-table");
        locations.forEach(element => {
            $table.append('<tr><td><img src="../assets/images/flag.png'  +  '"</img></td><td>' + element.state +  '</td><td>' + element.city + '</td><td>' + element.contact + '</td></tr>');
        });
        $(".parent").append($table);
    });
});