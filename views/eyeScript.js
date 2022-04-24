const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#id_password');
 
  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type');
    password.setAttribute('type', type === 'password' ? 'text' : 'password');
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});