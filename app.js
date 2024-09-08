function buscar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");


    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // Verifica se campoPesquisa está vazio após remover espaços em branco.
    // Se estiver vazio, exibe uma mensagem de erro e interrompe a função.
    if (!campoPesquisa.trim()) {
        section.innerHTML = "<p>Por favor, digite um termo de busca válido.</p>";
        return;
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    
    // Inicializa uma string vazia para concatenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada item da lista de dados (assumindo que 'dados' seja um array de objetos)
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa''
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)) {
            // Cria uma nova div para cada resultado, formatando o HTML com os dados do objeto atual
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="https://www.youtube.com/youtube.com/watch?v=ruS-PeRHLF0" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Saiba mais</a>
            </div>
        `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nenhum resultado encontrado</p>"
    }

    // Atribui o HTML gerado à seção de resultados, substituindo o conteúdo anterior
    section.innerHTML = resultados;
    
}
