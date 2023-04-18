let newPerson = {};

function setData(fieldName) {
    newPerson[fieldName] = document.getElementById(fieldName).value;
}

const people = 1;

function submitData() {
    console.log(newPerson);
    people.unshift(newPerson);
    root.prepend(drawPerson(newPerson));
    newPerson = {};

    document.getElementById('name').value = '';
    document.getElementById('image').value = '';
    document.getElementById('link').value = '';

    return false;
}