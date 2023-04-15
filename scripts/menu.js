const homePage = document.createElement('a');
homePage.href = "index.html";
homePage.innerHTML = "Go home";

const contactPage = document.createElement('a');
contactPage.href = "contact.html";
contactPage.innerHTML = "Contacts";

const aboutPage = document.createElement('a');
aboutPage.href = "about.html";
aboutPage.innerHTML = "About";

const root = document.querySelector('body');
root.appendChild(homePage);
root.appendChild(contactPage);
root.appendChild(aboutPage);
