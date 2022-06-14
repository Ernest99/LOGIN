let pass = document.getElementById('pwd');
let mail = document.getElementById('mail');
let form = document.getElementById('form');
let warn = document.getElementById('error');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (pass.value == '') {
        warn.classList.add('show-error');
    } else {
        alert("working")
    }
});