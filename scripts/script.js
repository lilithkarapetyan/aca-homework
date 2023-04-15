const people = [{
    name: "Lilith",
    info: "Some random text",
    image: "images/profiles/photo.png",
    isMyTurn: true,
    link: "pages/page1.html",
}, {
    name: "Rafayel",
    info: "Some random text 1",
    image: "images/profiles/Rafayel.png",
    isMyTurn: false,
    link: "pages/page2.html",
}, {
    name: "Arman",
    info: "Some random text 2",
    image: "images/profiles/Arman.png",
    isMyTurn: false,
    link: "pages/page3.html",
}];

for (let i = 0; i < people.length; i++) {
    const person = people[i];

    const link = document.createElement('a');
    link.href = person.link;
    if(person.isMyTurn){
        link.id = "highlight";
    }

    const container = document.createElement('div');
    container.className = "person";

    link.appendChild(container);

    const photo = document.createElement('img');
    photo.src = person.image;
    container.appendChild(photo);

    const name = document.createElement("h1");
    name.innerHTML = person.name;
    container.appendChild(name);

    root.appendChild(link);
}
