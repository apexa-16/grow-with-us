function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

function openModal() {
    document.getElementById('register-form').style.display = 'block';
}

function closeModal() {
    document.getElementById('register-form').style.display = 'none';
}

// Form submission handling (if needed in the future)
document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Registration form submitted!');
    closeModal();
});
