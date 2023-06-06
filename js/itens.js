const urlParams = new URLSearchParams(window.location.search)
const idProduto = urlParams.get('id')
const username = localStorage.getItem('username')
console.log(idProduto)

async function loadItens(){
    const element= document.querySelector('#username')
    element.innerHTML= username
    const data= await fetch(`https://fakestoreapi.com/products/${idProduto}`)
    const produtos= await data.json()
    console.log(produtos)
    const img_produto= document.querySelector('.imagem_produto')
    img_produto.src= produtos.image
    const titulo= document.querySelector('.title_detalhes')
    titulo.textContent= produtos.title
    const preco= document.querySelector('.preco_item')
    preco.textContent= `R$${(produtos.price*4.97).toFixed(2)}`
    const descricao= document.querySelector('.descricao_item')
    descricao.textContent= produtos.description
    const avaliacao= document.querySelector('.avaliacao')
    avaliacao.textContent= produtos.rating.rate
    const botao = document.querySelector("button")
    botao.addEventListener("click", async (element) => {
        const user = localStorage.getItem('login')
        console.log("clicou no adicionar")
        console.log(idProduto)
        console.log(element)

        const listProdutos = await axios.get(`http://localhost:3000/carrinho_${user}`)
        let remover = []
        let quantidade;
        listProdutos.data.forEach((produto) => {
            if (produto.idProduto == idProduto) {
                quantidade = produto.quantidade + 1
                remover.push(produto.id)
            }
        }) 

        var data = {
            username,
            idProduto: idProduto,
            quantidade: quantidade || 1
        }

        if (remover.length > 0) {
            remover.forEach(async (id) => {
                await axios.delete(`http://localhost:3000/carrinho_${user}/${id}`)
            })
        }
        await axios.post(`http://localhost:3000/carrinho_${user}`, data)
})
}



loadItens()