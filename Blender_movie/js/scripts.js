// POsters on the right side
posters.forEach(element => {
    let rightContainer = document.querySelector(".right-container");
    let imageContainer = document.createElement("img");
    imageContainer.src= element.imageUrl;
    imageContainer.alt = "Upcoming projects title images"
    rightContainer.appendChild(imageContainer);
});

// Selecting all the necessary elements ir order to append
let leftContainer = document.querySelector(".left-container");
let videoContainer = document.querySelector(".video-container");
let videoSrc = document.createElement("video");
videoSrc.setAttribute("controls" , "controls");
let hrLine = document.createElement("hr");
let desc = document.querySelector(".description-container");
let title = document.querySelector(".title");
let description = document.querySelector(".description");

// Attaching the video source and adding title and description 
videoSrc.src = video.videoUrl;
videoSrc.poster = "assets/images/thumbnail.png";
videoSrc.alt = "Thumbnail for video cover image";
title.innerHTML = video.title;
description.innerHTML = video.description;

// Comment container and comments part starts here
let commentsContainer = document.querySelector(".comments-container");

video.comments.forEach(element =>{
    let singleComment = document.createElement("div");
    singleComment.className = "single-comment";
    let commentImageContainer = document.createElement("div");
    commentImageContainer.className = "comment-image-container";
    let commentDetails = document.createElement("div");
    commentDetails.className = "comment-details";
    let commenterImage = document.createElement("img");
    let commentName = document.createElement("h5");
    let commentPara = document.createElement("p")
    // Appending commenter image, commenter name and actual comment to the comment container
    commenterImage.src = element.image;
    commentImageContainer.appendChild(commenterImage);
    commentName.innerHTML = element.name;
    commentPara.innerHTML = element.comment;
    commentDetails.append(commentName , commentPara);
    singleComment.append(commentImageContainer , commentDetails);
    commentsContainer.appendChild(singleComment);
});
// Attaching video, title , description, comments container to their respective containers
videoContainer.appendChild(videoSrc);
desc.appendChild(title);
desc.appendChild(description);
leftContainer.appendChild(desc);
leftContainer.appendChild(hrLine);

leftContainer.appendChild(commentsContainer);



