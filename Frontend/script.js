// Função para buscar os dados da API e renderizar na página
async function carregarDados() {
    try {
        // Etapa 1 e 2: Define a URL da API na porta 3000 e faz a requisição GET
        const url = 'https://cautious-potato-xrv65v79gwx5fp795-3000.app.github.dev/api/produtos';
        const resposta = await fetch(url);
        
        // Etapa 4: Converte a resposta em JSON
        const produto = await resposta.json();

        // Etapa 5: Acessa a div com ID "lista-produtos"
        const container = document.getElementById('lista-produtos');

        // Etapa 11: Monta o Card do Produto utilizando Template String e insere com innerHTML
   container.innerHTML = '';

produto.forEach((item) => {
    container.innerHTML += `
        <div class="card">
            <h2>${item.nome}</h2>
            <p><strong>Preço:</strong> R$ ${item.preco}</p>
        </div>
    `;
});

    } catch (erro) {
        console.error('Erro ao buscar dados da API:', erro);
        document.getElementById('lista-produtos').innerHTML = '<p>Erro ao carregar o produto.</p>';
    }
}

// Etapa 12: Executa a função ao carregar o arquivo
carregarDados();