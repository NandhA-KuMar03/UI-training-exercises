$(document).ready(function () {

    // Ajax function for Posters on the right container
    $.ajax({
        url: "https://mocki.io/v1/8c9b378b-d248-4203-93b0-b8e7659ac346",
        type: "GET",
        success: function(poster){
            $.each(poster, function(k,value){
                // Create a image container for each poster and append it in the right container
                let $imageContainer =$("<img></img>").attr("src",value.imageUrl);
                $(".right-container").append($imageContainer)
            });
        },
    });

    // Ajax container for title, description, comments on the left container
    $.ajax({
        url : "https://mocki.io/v1/4da47fc5-bbf3-4e41-b35f-c88a584bc4b0",
        type: "GET",
        success: function(video){
            let $videoSrc = $("<video></video>").attr("controls" , "controls");
            $videoSrc.attr("src" , video.videoUrl);
            $videoSrc.attr("poster" , "images/thumbnail.png");
            let $hrLine = $("<div>").addClass("divider-left-container");

            // Adding title and description in the left container
            $title = $(".title").text(video.title);
            $description = $(".description").text(video.description);

            // Comments container which has comments and image 
            let $commentsContainer = $(".comments-container");
            // Iterating through the array of comments in video function and printing image, name and comment
            $.each(video.comments , function(k,element){
                let $singleComment = $("<div>").addClass("single-comment");
                let $commentImageContainer = $("<div>").addClass("comment-image-container");

                let $commentDetails = $("<div>").addClass("comment-details");
                let $commenterImage = $("<img>").attr("src" , element.image);
                let $commentName = $("<h5>").text(element.name);
                let $commentPara = $("<p>").text(element.comment);
                
                $commentImageContainer.append($commenterImage);
                $commentDetails.append($commentName , $commentPara);
                $singleComment.append($commentImageContainer , $commentDetails);
                $(".comments-container").append($singleComment);
            });

            // Appending video, title, description, comments container
            $(".video-container").append($videoSrc);
            $(".description-container").append($title , $description);
            $(".left-container").append($description , $hrLine);
            $(".left-container").append($commentsContainer);
        },
    });
})