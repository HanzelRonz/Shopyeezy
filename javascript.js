function switchForm() {
    const signInContainer = document.querySelector('.sign-in-container');
    const signUpContainer = document.querySelector('.sign-up-container');
    
    signInContainer.style.display = signInContainer.style.display === 'none' ? 'block' : 'none';
    signUpContainer.style.display = signUpContainer.style.display === 'none' ? 'block' : 'none';
}

function signIn(event) {
    event.preventDefault();
    
    const username = document.getElementById('signInUsername').value;
    const password = document.getElementById('signInPassword').value;

    // Your sign-in logic here

    console.log('Signing in with username:', username, 'and password:', password);
}

function signUp(event) {
    event.preventDefault();
    
    const username = document.getElementById('signUpUsername').value;
    const password = document.getElementById('signUpPassword').value;

    // Your sign-up logic here

    console.log('Signing up with username:', username, 'and password:', password);
}