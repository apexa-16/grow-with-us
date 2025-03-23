function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

function openModal() {
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('form-typ').style.display = 'block';
    document.getElementById('employee-form').style.display = 'none';
    document.getElementById('business-form').style.display = 'none';
}

function closeModal() {
    document.getElementById('register-form').style.display = 'none';
}

function showBusinessForm() {
    document.getElementById('business-form').style.display = 'block';
    document.getElementById('employee-form').style.display = 'none';
    document.getElementById('form-typ').style.display = 'none';
}

function showEmployeeForm() {
    document.getElementById('employee-form').style.display = 'block';
    document.getElementById('business-form').style.display = 'none';
    document.getElementById('form-typ').style.display = 'none';
}

// Form submission handling for Business
document.getElementById('business-registration-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Business Registration form submitted!');
    closeModal();
});

// Form submission handling for Employee
document.getElementById('employee-registration-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Employee Registration form submitted!');
    closeModal();
});
