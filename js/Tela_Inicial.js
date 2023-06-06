document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    console.log('Username:', username);
    console.log('Password:', password);
    axios.get('http://localhost:3000/users')
    .then(function(res){
        let encontrado = false;
        for (var i = 0; i < res.data.length; i++) {
            var usuario = res.data[i];    
                
            if (usuario.username === username) {     
                if (usuario.password === password) { 
                    localStorage.setItem('username', usuario.name)
                    localStorage.setItem('login', usuario.username)
                    window.location.href = "home.html";       
                    encontrado = true;  
                } else {       
                    alert('senha incorreta')    
            }      
            break;   
            }
        }
        if (!encontrado){
            alert('usuário não encontrado')
        }
    })

    
});

document.getElementById('cadastro')?.addEventListener('submit', async function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    var user = {
        username, password, name, email
    }

    //TODO: Criar um carrinho_username pra quando o usuário se cadastrar
    await axios.post('http://localhost:3000/users', user)
});
