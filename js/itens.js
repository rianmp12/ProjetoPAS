const urlParams = new URLSearchParams(window.location.search)
const idProduto = urlParams.get('id')
console.log(idProduto)
const listItens=[];

async function loadItens(){
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
        listItens.push(produtos.id)
        console.log(listItens)
    
})
}



loadItens()