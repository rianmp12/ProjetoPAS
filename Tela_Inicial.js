document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the values from the input fields
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Do something with the username and password (e.g., perform login logic)
    console.log('Username:', username);
    console.log('Password:', password);

    // Redirect the user to another page after successful login
    window.location.href = "home.html";
});
