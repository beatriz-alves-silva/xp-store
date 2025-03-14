function gerarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    const container = document.getElementById('secao-carrinho');

    if (!container) {
        console.error("Container do carrinho não encontrado!");
        return;
    }

    if (carrinho.length === 0) {
        container.innerHTML = `<p>O carrinho está vazio.</p>`;
        return;
    }

    let html = '';

    carrinho.forEach((item, index) => {
        html += `
            <div class="lista-carrinho">
                <div class="item-img">
                    <img class="imagem" src="${item.imagem}" alt="${item.nome}">
                </div>

                <div class="detalhes">
                    <span>${item.nome}</span>
                    <span class="preco">R$ ${item.preco.toFixed(2)}</span>
                </div>

                <div class="botao">
                    <button onclick="removerItem(${index})">Remover</button>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function removerItem(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    carrinho.splice(index, 1);

    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    gerarCarrinho();
}

gerarCarrinho();
