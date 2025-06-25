

// Formulário de Contato
document.getElementById('formContato').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;
    
    if (nome === '' || email === '' || mensagem === '') {
        document.getElementById('mensagemErro').style.display = 'block';
    } else {
        document.getElementById('mensagemErro').style.display = 'none';
        alert('Formulário enviado com sucesso!');
       
    }
});

// Menu que muda de cor ao rolar
window.addEventListener('scroll', function() {
    const menu = document.getElementById('menu');
    if (window.scrollY > 50) { 
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }
});
