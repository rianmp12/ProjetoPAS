document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    console.log('Username:', username);
    console.log('Password:', password);
    axios.get('http://localhost:3000/users')
    .then(function(res){
        console.log(res)
        for (var i = 0; i < res.data.length; i++) {
               var usuario = res.data[i];    
                
               if (usuario.username === username) {     
                   
                if (usuario.password === password) { 
                    localStorage.setItem('username', usuario.name)
                    window.location.href = "home.html";         
                } else {       
                    alert('senha incorreta')    
            }      
            break;   
        } 
        alert('usuário não encontrado')
        }

    })

    
});

document.getElementById('cadastro')?.addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    var user = {
        username, password, name, email
    }

    axios.post('http://localhost:3000/users', user)

});
