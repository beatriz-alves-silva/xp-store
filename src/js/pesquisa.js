const form = document.getElementById('form-pesquisa');
const campoPesquisa = document.getElementById('search-input');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // evita o comportamento padrão do form

    const src = campoPesquisa.value.trim();

    if (src === '') {
        alert('Digite algo para pesquisar!');
    return;
    }

    // redireciona para pesquisa.html com o src na URL (query string)
    window.location.href = `pesquisa.html?src=${encodeURIComponent(src)}`;
});
