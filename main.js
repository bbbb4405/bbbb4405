document.getElementById('contactBtn').addEventListener('click', function() {
    alert('Contact button clicked! Please check the contact section.');
});

document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        alert(`Redirecting to ${this.getAttribute('data-icon')} profile...`);
    });
});
