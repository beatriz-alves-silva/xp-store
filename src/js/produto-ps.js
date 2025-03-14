async function carregarProdutos() {
    try {
        const resposta = await fetch('/src/data/produtos.json');
        const dados = await resposta.json();

        const paginaAtual = window.location.pathname;

        let categoria = "";
        if (paginaAtual.includes("playstation")) {
            categoria = "playstation";
        } else if (paginaAtual.includes("xbox")) {
            categoria = "xbox";
        } else if (paginaAtual.includes("nintendo")) {
            categoria = "nintendo";
        }

        const container = document.getElementById('secao-produtos');

        dados.produtos.filter(produto => produto.marca === categoria)
            .forEach(produto => {
                const divProduto = document.createElement('div');
                divProduto.classList.add('produto');

                divProduto.innerHTML = `
                    <a href="/src/pages/compra.html?id=${produto.id}">
                    <img class="imagem" src="${produto.imagem}" alt="${produto.nome}">
                    <span class="descricao">${produto.nome}</span>
                    <span class="valor">R$ ${produto.preco.toFixed(2)}</span>
                `;

                container.appendChild(divProduto);
            });

    } catch (erro) {
        console.error("Erro ao carregar os produtos:", erro);
    }
}

function carregarTelaCompra(){ 
    const conteiner = document.getElementById('produto-infos');
    
}

carregarProdutos();
