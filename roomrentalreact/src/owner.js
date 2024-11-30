import React from 'react';

function verifyAadhar() {
    const aadhar = document.getElementById('aadharNumber').value;
    if (aadhar.length === 12) {
        showModal('Aadhar Verified Successfully!');
    } else {
        showModal('Invalid Aadhar Number. Please enter a 12-digit number.');
    }
}

function submitListing(event) {
    event.preventDefault();
    showModal('Listing Submitted Successfully!');
}


function showModal(message) {

    document.getElementById('modalBody').innerText = message;

    const modalElement = document.getElementById('actionModal');
    const modal = new window.bootstrap.Modal(modalElement);
    modal.show();
}

export { verifyAadhar, submitListing };

