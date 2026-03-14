window.addEventListener('scroll', function () {
    var navbar = document.getElementById('main-nav');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = 'rgba(10, 10, 10, 0.95)';
        } else {
            navbar.style.backgroundColor = 'transparent';
        }
    }
});

fetch('components/header.html?t=' + new Date().getTime())
    .then(response => response.text())
    .then(data => {
        const headerPlaceholder = document.getElementById('header-placeholder');
        if (headerPlaceholder) {
            headerPlaceholder.innerHTML = data;
        }
    })
    .catch(error => console.error('Error cargando el header:', error));

fetch('components/footer.html?t=' + new Date().getTime())
    .then(response => response.text())
    .then(data => {
        const footerPlaceholder = document.getElementById('footer-placeholder');
        if (footerPlaceholder) {
            footerPlaceholder.innerHTML = data;
        }
    })
    .catch(error => console.error('Error cargando el footer:', error));
