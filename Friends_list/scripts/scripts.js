friends.forEach(element => {
    let page_container = document.querySelector(".page_container");
    let card_container = document.createElement("div");
    card_container.className = "card_container";
    let img_container = document.createElement("img");
    img_container.src = element.img;
    img_container.className = "img_contain";
    let details_container = document.createElement("div");
    details_container.className = "details_container";
    let name = document.createElement("p");
    name.className = "name";
    let mail = document.createElement("p");
    mail.className = "mailid";
    name.innerHTML = element.first_name + " " +element.last_name;
    mail.innerHTML = element.email;


    card_container.appendChild(img_container);
    card_container.appendChild(details_container);
    details_container.appendChild(name);
    details_container.appendChild(mail);
    page_container.appendChild(card_container);

});