let carrinho = [];

function obterIdProduto() {
    const parametros = new URLSearchParams(window.location.search);
    return parametros.get("id");
}

async function carregarTelaCompra() {
    try {
        const idProduto = obterIdProduto();

        if (!idProduto) {
            console.error("Nenhum ID de produto encontrado.");
            return;
        }

        const resposta = await fetch('/src/data/produtos.json');
        const dados = await resposta.json();

        const produto = dados.produtos.find(p => p.id == idProduto);

        if (!produto) {
            console.error("Produto não encontrado.");
            return;
        }

        const container = document.getElementById('produto-infos');
        container.innerHTML = `
            <div class="container-produto">
                <img class="imagem" src="${produto.imagem}" alt="${produto.nome}">

                <div class="detalhes-compra">
                    <span class="nome-produto">${produto.nome}</span>
                    <span class="valor">R$ ${produto.preco.toFixed(2)}</span>
                    <button class="add-carrinho">Carrinho</button>
                </div>
            </div>

            <div class="container-descricao">
                <span class="titulo-descricao">Informações do Produto:</span>
                <span class="descricao-produto">${produto.descricao}</span>
            </div>

            <div class="container-outros">
                <span class="titulo-outros">Outros produtos</span>
                <div id="outros-produtos" class="outros-produtos"></div>
            </div>
        `;

        const botaoCarrinho = document.querySelector('.add-carrinho');

        botaoCarrinho.addEventListener('click', () => {
            adicionarAoCarrinho(produto);
        });

    } catch (erro) {
        console.error("Erro ao carregar o produto:", erro);
    }
}
function adicionarAoCarrinho(produto) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

    carrinho.push(produto);

    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    alert(`${produto.nome} foi adicionado ao carrinho!`);
}

carregarTelaCompra();

