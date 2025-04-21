function loadHTML(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
        })
        .catch(error => console.error('Error:', error));
}

loadHTML('navbar', 'navbar.html');
loadHTML('footer', 'footer.html');