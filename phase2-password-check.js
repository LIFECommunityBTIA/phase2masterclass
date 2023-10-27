function checkPassword() {
    var enteredPassword = document.getElementById('password').value;
    var correctPassword = 'admin'; // Replace with your actual password
    var redirectLink = 'https://sites.google.com/view/lifecommunity-training-portal/masterclass-page/phase-2'; // Replace with your Google Site link

    if (enteredPassword === correctPassword) {
        window.location.href = redirectLink; // Redirect to the specified link
    } else {
        alert('Incorrect password. Try again.');
    }
}