

function createProfile(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    const profileList = document.getElementById('profileList');

    const li = document.createElement('li');
    li.innerHTML = `
        <strong>Name:</strong> ${name} <br>
        <strong>Email:</strong> ${email} <br>
        <strong>Phone:</strong> ${phone} <br>
        <strong>Phone:</strong> ${password}
        <button class="delete-btn" onclick="deleteProfile(this)">Delete</button>
    `;

    profileList.appendChild(li);


    document.getElementById('profileForm').reset();
}

function deleteProfile(button) {
    const li = button.parentElement;
    li.remove();
}
