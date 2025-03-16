const urlParams = new URLSearchParams(window.location.search);
const itemBuscado = urlParams.get('src') ? urlParams.get('src').toLowerCase() : '';
const container = document.getElementById('secao-pesquisa');

if (!itemBuscado) {
    container.innerHTML = '<span class="mensagem">Nenhuma pesquisa informado.</span>';
    } else {
        // busca no JSON
        fetch('/src/data/produtos.json')
            .then(response => response.json())
            .then(dados => {
                const produtos = dados.produtos;

                // Filtra os produtos com base no termo digitado
                const encontrados = produtos.filter(produto => 
                    produto.nome.toLowerCase().includes(itemBuscado) ||
                    produto.marca.toLowerCase().includes(itemBuscado) ||
                    (produto.descricao && produto.descricao.toLowerCase().includes(itemBuscado))
                );

                if (encontrados.length > 0) {
                    container.innerHTML = ''; // limpa o "Carregando..."

                    encontrados.forEach(produto => {
                        container.innerHTML += `
                        <div class="produto">
                            <img src="${produto.imagem}" alt="${produto.nome}">
                            <div class="detalhes">
                                <h2>${produto.nome}</h2>
                                <p><strong>Marca:</strong> ${produto.marca}</p>
                                <p><strong>Preço:</strong> R$ ${produto.preco.toFixed(2)}</p>
                                <button>Carrinho</button>
                            </div>
                        </div>
                        `;
                    });
                } else {
                    container.innerHTML = '<p class="mensagem">Nenhum item encontrado.</p>';
                }
            })
        .catch(error => {
            console.error('Erro ao carregar o JSON:', error);
            container.innerHTML = '<p class="mensagem">Erro ao carregar os dados.</p>';
        });
}