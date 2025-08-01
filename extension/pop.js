
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Pass this to background script or auth_handler endpoint if using a backend
  console.log('Login attempt:', { email, password });

  // For now, just simulate login
  alert(`Logged in as ${email}`);
});
