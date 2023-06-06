
const container_item = document.querySelector(".container_itens")
const button = document.querySelector(".total")


async function loadItens(){
    const listItens= await getItensCarrinho()
    let cont=0
    listItens.forEach(async element => {
        console.log(element)
        const data = await fetch(`https://fakestoreapi.com/products/${element.idProduto}`)
        const produtos = await data.json()

        const item = document.createElement('div')
        item.className = 'itens_carrinho'
        const img = document.createElement('img')
        img.src = produtos.image
        const title = document.createElement('p')
        title.textContent = produtos.title

        const quant = document.createElement('p')
        quant.textContent = element.quantidade
        const price = document.createElement('p')
        price.textContent = "R$ " + (produtos.price*4.97).toFixed(2)
        cont+=produtos.price
        item.append(img)
        item.append(title)
        item.append(quant)
        item.append(price)
        container_item.append(item)
        button.textContent="Valor total: R$ " + (cont*4.97).toFixed(2)
    });

    
}

async function botaoLixeira(){
    const lixeira = document.querySelector('.lixeira')
    lixeira.addEventListener("click", async (element) =>{
        element.preventDefault()
        const user = localStorage.getItem('login')
        const listItens= await getItensCarrinho()
        listItens.forEach(async element => {
            await axios.delete(`http://localhost:3000/carrinho_${user}/${element.id}`)
        });

        console.log(listItens)
        container_item.textContent=""
        button.textContent= "Valor total: R$ 0,00"
    })
}

async function getItensCarrinho(){
    const user = localStorage.getItem('login')
    const itens = await fetch(`http://localhost:3000/carrinho_${user}`)
    return itens.json()
}

botaoLixeira()
loadItens();

/*
listItens.forEach(async element => {
        const data= await fetch(`https://fakestoreapi.com/products/${element}`)
        const produtos= await data.json()
        const item= document.createElement('div')
        item.className= 'itens_carrinho'
        const img = document.createElement('img')
        img.src = produtos.image
        const title = document.createElement('p')
        title.textContent = produtos.title
        const quant = document.createElement('p')
        quant.textContent = '1'
        const price = document.createElement('p')
        price.textContent = "R$"+produtos.price
        cont+=produtos.price
        item.append(img)
        item.append(title)
        item.append(quant)
        item.append(price)
        container_item.append(item)
        button.textContent="Valor total: R$"+cont
    });
*/