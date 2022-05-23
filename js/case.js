var produtos = [
    {
       
        imgUrl: 'https://http2.mlstatic.com/D_NQ_NP_2X_928147-MLB49934479570_052022-F.webp',
        nome: 'Capa Capinha Silicone + Película Para iPhone 6 / 6s',
        texto: 'Capa Capinha Aveludada de silicone + Película de Vidro Compatível iPhone com 6 / 6s',
    }
]

produtos.map((produto) => {
    document.getElementById('produtos').innerHTML += `
    <div class="produto">
        <img src+"${produto.imagem}">
        <h2>${produto.nome}</h2>
        <p>${produto.texto}</p>
        <button>Comprar</button>
    </div>
    `

})