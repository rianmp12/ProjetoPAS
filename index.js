const container= document.querySelector(".main")
const todas = document.querySelector('#todas');
const categoria_masculina = document.querySelector('#catmasculina');
const categoria_feminina = document.querySelector('#catfeminina');
const categoria_acessorio = document.querySelector('#catacessorio');
const categoria_eletronico = document.querySelector('#cateletronico');
const usernameElement = document.querySelector("#username");
usernameElement.innerHTML = localStorage.getItem('username');

async function itens(){
    const data= await fetch('https://fakestoreapi.com/products')
    const produtos= await data.json()
    console.log(produtos)
    todas.className = 'mudaCor' 
    produtos.forEach(element => {
        const item= document.createElement('div')
        item.className= 'itens'
        const link = document.createElement('a')
        console.log(element.id)
        link.href = `itens.html?id=${element.id}`
        link.className = 'link_link'
        const img = document.createElement('img')
        img.src = element.image
        img.id = element.id
        const a = document.createElement('a')
        a.href= '#'
        a.className = 'link_texto'
        a.textContent = element.title
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
        link.append(item)
        container.append(link)
        link.addEventListener('click', function(event){
          event.preventDefault();
          window.location.href =  link.href;
        })
        
    });
}

async function detailsProduto(event){
  event.preventDefault();
  window.location.href =  link.href;
}

async function categorias() {
    const data= await fetch('https://fakestoreapi.com/products')
    const produtos= await data.json()
    todas.addEventListener("click", function () {
        categoria_masculina.removeAttribute('class')
        categoria_acessorio.removeAttribute('class')
        categoria_eletronico.removeAttribute('class')
        categoria_feminina.removeAttribute('class')
        todas.className = 'mudaCor'
        container.innerHTML = "";
        produtos.forEach(element => {
          const item= document.createElement('div')
          item.className= 'itens'
          const link = document.createElement('a')
          link.href = `itens.html?id=${element.id}`
          link.className = 'link_link'
          const img = document.createElement('img')
          img.src = element.image
          img.id = element.id
          const a = document.createElement('a')
          a.href= '#'
          a.className = 'link_texto'
          a.textContent = element.title
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
          link.append(item)
          container.append(link)
          link.addEventListener('click', function(event){
            event.preventDefault();
            window.location.href =  link.href;
          })
          })});
    categoria_masculina.addEventListener("click", function () {
        container.innerHTML = "";
        categoria_masculina.className = 'mudaCor';
        todas.removeAttribute('class')
        categoria_feminina.removeAttribute('class')
        categoria_eletronico.removeAttribute('class')
        categoria_acessorio.removeAttribute('class')
      
      produtos.forEach(element => {
        if (element.category === "men's clothing") {
          const item= document.createElement('div')
        item.className= 'itens'
        const link = document.createElement('a')
        link.href = `itens.html?id=${element.id}`
        link.className = 'link_link'
        const img = document.createElement('img')
        img.src = element.image
        img.id = element.id
        const a = document.createElement('a')
        a.href= '#'
        a.className = 'link_texto'
        a.textContent = element.title
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
        link.append(item)
        container.append(link)
        link.addEventListener('click', function(event){
          event.preventDefault();
          window.location.href =  link.href;
        })
        }
      });
    });
    categoria_feminina.addEventListener("click", function () {
        container.innerHTML = "";
        todas.removeAttribute('class')
        categoria_masculina.removeAttribute('class')
        categoria_acessorio.removeAttribute('class')
        categoria_eletronico.removeAttribute('class')
        categoria_feminina.className = 'mudaCor'
        produtos.forEach(element => {
          if (element.category === "women's clothing") {
            const item= document.createElement('div')
        item.className= 'itens'
        const link = document.createElement('a')
        link.href = `itens.html?id=${element.id}`
        link.className = 'link_link'
        const img = document.createElement('img')
        img.src = element.image
        img.id = element.id
        const a = document.createElement('a')
        a.href= '#'
        a.className = 'link_texto'
        a.textContent = element.title
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
        link.append(item)
        container.append(link)
        link.addEventListener('click', function(event){
          event.preventDefault();
          window.location.href =  link.href;
        })
          }
        });
      });
      categoria_acessorio.addEventListener("click", function () {
        container.innerHTML = "";
        todas.removeAttribute('class')
        categoria_masculina.removeAttribute('class')
        categoria_feminina.removeAttribute('class')
        categoria_eletronico.removeAttribute('class')
        categoria_acessorio.className = 'mudaCor'
        produtos.forEach(element => {
          if (element.category === "jewelery") {
            const item= document.createElement('div')
        item.className= 'itens'
        const link = document.createElement('a')
        link.href = `itens.html?id=${element.id}`
        link.className = 'link_link'
        const img = document.createElement('img')
        img.src = element.image
        img.id = element.id
        const a = document.createElement('a')
        a.href= '#'
        a.className = 'link_texto'
        a.textContent = element.title
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
        link.append(item)
        container.append(link)
        link.addEventListener('click', function(event){
          event.preventDefault();
          window.location.href =  link.href;
        })
          }
        });
      });
      categoria_eletronico.addEventListener("click", function () {
        container.innerHTML = "";
        todas.removeAttribute('class')
        categoria_masculina.removeAttribute('class')
        categoria_acessorio.removeAttribute('class')
        categoria_feminina.removeAttribute('class')
        categoria_eletronico.className = 'mudaCor'
        produtos.forEach(element => {
          if (element.category === "electronics") {
            const item= document.createElement('div')
        item.className= 'itens'
        const link = document.createElement('a')
        link.href = `itens.html?id=${element.id}`
        link.className = 'link_link'
        const img = document.createElement('img')
        img.src = element.image
        img.id = element.id
        const a = document.createElement('a')
        a.href= '#'
        a.className = 'link_texto'
        a.textContent = element.title
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
        link.append(item)
        container.append(link)
        link.addEventListener('click', function(event){
          event.preventDefault();
          window.location.href =  link.href;
        })
          }
        });
      });
  }
itens();
categorias();