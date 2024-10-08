const biografia = document.getElementById('biografia2');
const services = document.getElementById('services');
const imgLinus = document.querySelector('.imgLinus')

document.getElementById('botao-1').addEventListener('click', function() {
    services.style.display = 'none';

    biografia.style.display = 'block';
    window.revelar.reveal('.efeito-box1', {
        duration: 1400,
        distance: '90px'
    });
    if (imgLinus){
        imgLinus.remove();
    }
});


// const biografia = document.getElementById('biografia2');
// const botao = document.getElementById('botao-1');

// addEventListener('click', function(){
//     biografia.scrollIntoView({
//         behavior: 'smooth'
//     });
// });;

// botao.addEventListener('click', function() {
//     if (sidebar.style.width == '6vw') {
//         sidebar.style.width = '0';
//     } else {
//         sidebar.style.width = '6vw';
//     }
// });;