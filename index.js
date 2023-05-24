const container= document.querySelector(".main")
const categoria_masculina = document.querySelector('#catmasculina');
const categoria_feminina = document.querySelector('#catfeminina');
const categoria_acessorio = document.querySelector('#catacessorio');
const categoria_eletronico = document.querySelector('#cateletronico');

async function itens(){
    const data= await fetch('https://fakestoreapi.com/products')
    const produtos= await data.json()
    console.log(produtos)
    produtos.forEach(element => {
        const item= document.createElement('div')
        item.className= 'itens'
        const img= document.createElement('img')
        img.src= element.image
        const a= document.createElement('a')
        a.href= '#'
        a.textContent= element.title
        const price = document.createElement('div')
        price.className= 'price'
        const text = document.createElement('span')
        text.textContent = 'por'
        const textPrice = document.createElement('p')
        textPrice.textContent = 'R$' + (element.price * 4.97).toFixed(2);
        const text2 = document.createElement('span')
        text2.textContent = 'à vista'
        item.append(img)
        item.append(a)
        price.append(text)
        price.append(textPrice)
        price.append(text2)
        item.append(price)
        container.append(item)
        
    });
}

itens()