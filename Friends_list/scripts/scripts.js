friends.forEach(element => {
    let page_container = document.querySelector(".page-container");
    let card_container = document.createElement("div");
    card_container.className = "card-container";
    let img_container = document.createElement("img");
    img_container.src = element.img;
    img_container.className = "img-contain";
    let details_container = document.createElement("div");
    details_container.className = "details-container";
    let name = document.createElement("h3");
    name.className = "name";
    let mail = document.createElement("h6");
    mail.className = "mail-id";
    name.innerHTML = element.first_name + " " +element.last_name;
    mail.innerHTML = element.email;

    card_container.appendChild(img-container);
    card_container.appendChild(details-container);
    details_container.appendChild(name);
    details_container.appendChild(mail);
    page_container.appendChild(card-container);
});