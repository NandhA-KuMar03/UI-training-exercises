// window.localStorage.setItem("notes" , JSON.stringify(notes));
let noteObj = JSON.parse(window.localStorage.getItem("notes"));
console.log(noteObj);
$(document).ready(function(){

    let $noteContainer = $(".notes-container");
    $.each(noteObj,function(k,value){
        let $card = $("<div>").addClass("card");

        let $noteTitle = $("<h2>").addClass("note-title");
        $noteTitle.text(value.title);
        // console.log(value.title);

        let $dateAddEdit = $("<h5>").addClass("note-date");
        $dateAddEdit.text(value.date);

        let $imgContainer = $("<div>").addClass("notes-img-container");
        let $imgSrc = $("<img>").addClass("img-src");
        if(value.imageurl == "")
            $imgContainer.hide();
        $imgSrc.attr("src" , value.imageurl);
        $imgContainer.append($imgSrc);

        let $noteContent = $("<p>").addClass("notes-content");
        $noteContent.text(value.content);

        $card.append($noteTitle , $dateAddEdit , $imgContainer , $noteContent);
        $card.css("background-color" , value.color);
        $noteContainer.append($card);
    })
  });

  $("#newNoteSubmit").click(function(){
    let $title = $(".title-input").val();
    let $img = $(".img-input").val();
    let $content = $(".content-input").val();
    const month = ["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
    const d = new Date();
    let name = month[d.getMonth()];
    let $date = name + " " + d.getDate() + " , " + d.getFullYear();
    let $color = $(".color-input").val();
    $newNoteObj = {"title" : $title,
                    "date" : $date,
                    "color" : $color,
                    "imageurl" : $img,
                    "content" : $content};
    let $notesObj = JSON.parse(window.localStorage.getItem("notes"));
    $notesObj.unshift($newNoteObj);
    // console.log($newNoteObj);
    // console.log($notesObj);
    window.localStorage.setItem("notes" , JSON.stringify($notesObj));
    location.reload();
  });

$(".new-note-button").click(function(){
  let $form = $(".form-container");
  $form.css("right" , 0);
});

$(".delete-all-button").click(function(){
  notes=[]
  console.log(notes);
  window.localStorage.setItem("notes" , JSON.stringify(notes));
  location.reload();
});