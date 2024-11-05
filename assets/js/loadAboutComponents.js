document.addEventListener("DOMContentLoaded", function() {
    loadComponent('sidebar', 'components/Sidebar.html');
    loadComponent('menu-toggle', 'components/MenuToggle.html');
    loadComponent('main-content', 'components/about/MainContent.html');
});

function loadComponent(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            // Ejecutar scripts dentro del componente cargado
            const scripts = document.getElementById(id).getElementsByTagName('script');
            for (let script of scripts) {
                eval(script.innerText);
            }
        })
        .catch(error => console.error('Error loading component:', error));
}
