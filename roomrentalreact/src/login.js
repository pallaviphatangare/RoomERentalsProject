document.getElementById('toggleText').addEventListener('click', function () {
    const signUpForm = document.getElementById('signUpForm');
    const loginForm = document.getElementById('loginForm');
    const formTitle = document.getElementById('formTitle');
    const toggleText = document.getElementById('toggleText');

    if (loginForm.style.display === "none") {
        signUpForm.style.display = "none";
        loginForm.style.display = "block";
        formTitle.textContent = "Login";
        toggleText.textContent = "Don't have an account? Sign Up";
    } else {
        signUpForm.style.display = "block";
        loginForm.style.display = "none";
        formTitle.textContent = "Sign Up";
        toggleText.textContent = "Already have an account? Login";
    }
});

function socialLogin(platform) {
    alert(`Logging in with ${platform}`);
}

document.getElementById('signUpForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let name = document.getElementById('signupName').value;
    let email = document.getElementById('signupEmail').value;
    let password = document.getElementById('signupPassword').value;
    if (name && email && password) {
        alert(`Account created for ${name}`);
    } else {
        alert('Please fill all the fields!');
    }
});

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;
    if (email && password) {
        alert(`Logged in as ${email}`);
    } else {
        alert('Please fill all the fields!');
    }
});