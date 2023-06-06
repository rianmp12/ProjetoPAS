const urlParams = new URLSearchParams(window.location.search)
const idProduto = urlParams.get('id')
console.log(idProduto)

async function loadItens(){
    const element= document.querySelector('#username')
    element.innerHTML= localStorage.getItem('username');
    const data= await fetch(`https://fakestoreapi.com/products/${idProduto}`)
    const produtos= await data.json()
    console.log(produtos)
    const img_produto= document.querySelector('.imagem_produto')
    img_produto.src= produtos.image
    const titulo= document.querySelector('.title_detalhes')
    titulo.textContent= produtos.title
    const preco= document.querySelector('.preco_item')
    preco.textContent= `R$${produtos.price}`
    const descricao= document.querySelector('.descricao_item')
    descricao.textContent= produtos.description
    const avaliacao= document.querySelector('.avaliacao')
    avaliacao.textContent= produtos.rating.rate
    const botao = document.querySelector("button")
    botao.addEventListener("click", element=>{
        data = {
            id: localStorage.getItem('username'),
            idProduto: idProduto,
        }
        axios.post('http://localhost:3000/carrinho', data)
})
}



loadItens()