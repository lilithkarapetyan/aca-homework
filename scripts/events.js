function validate() {
    const { value } = document.getElementById('username');
    
    if(value.length < 5) {
        console.log("Invalid username");
    } else {
        console.log(`Your username will be ${value}`);
    }
}
