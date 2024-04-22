const registrationForm = document.getElementById('registrationForm');
const nameInput = document.getElementById('inlineFormInputGroupUsername');
const passwordInput = document.getElementById('exampleInputPassword1');
const confirmPasswordInput = document.getElementById('confirmPassword');
const nameError = document.getElementById('nameError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');
registrationForm.addEventListener('click', (event) => {
    alert(nameInput.value);
    alert(passwordInput.value);
    location.reload('dashboard.html');
    event.preventDefault();
    const name = nameInput.value.trim();
    const password = passwordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
    let isValid = true;
    if (name.length < 6){
        isValid = false;
        nameError.textContent = 'Username must be at least 6 characters long';}
    else {nameError.textContent = '';}
    if (!isValidPassword(password)){
        isValid = false;
        passwordError.textContent = 'Password must be at least 8 characters long; it must contain at least 1 capital letter, 1 number and 1 special symbol'}
    else {passwordError.textContent = '';}
    if (password !== confirmPassword){
        isValid = false;
        confirmPasswordError.textContent = 'Passwords are not identical!';}
    else {confirmPasswordError.textContent = '';}
    if (isValid(name, password, confirmPassword)){
        console.log('User registration', { name, password });
        nameInput.value = '';
        passwordInput.value = '';
        confirmPasswordInput.value = '';
    }});

function isValid(name, password, confirmPassword){
    const errors = [];
    if (name.length < 6){
        errors.push('Username must be at least 6 characters long');}
    if (!isValidPassword(password)){
        errors.push('Password must be at least 8 characters long; it must contain at least 1 capital letter, 1 number and 1 special symbol');}

    if (password !== confirmPassword){errors.push('Passwords are not identical!');}
    if (errors.length > 0){
        alert(errors.join('\n'));
        return false;}
    return true;}

function isValidPassword(password){
    // const template = /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*()-+=[]{}:;'",./<>?])[a-zA-Z0-9!@#$%^&*()-+=[]{}:;'",./<>?]{8,}$/;
    //     return template.test(password);
    return true;
}