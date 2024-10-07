const botao = document.getElementById('Btn2');
const sidebar = document.getElementById('sidebar');

botao.addEventListener('click', function() {
    if (sidebar.style.width == '6vw') {
        sidebar.style.width = '0';
    } else {
        sidebar.style.width = '6vw';
    }
});;