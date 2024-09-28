// Rolagem suave ao clicar nos links do menu
document.querySelectorAll('.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = this.getAttribute('href');
    if (target && target !== '#') {
      document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Feedback visual ao clicar nos botões
const buttons = document.querySelectorAll('.btn-custom');
buttons.forEach(button => {
  button.addEventListener('click', function () {
    this.classList.add('active');
    setTimeout(() => {
      this.classList.remove('active');
    }, 200);
  });
});

// Controle do carrossel manualmente
const carousel = document.querySelector('#carousel-spotify');
const prev = document.querySelector('.carousel-control-prev');
const next = document.querySelector('.carousel-control-next');

prev.addEventListener('click', function () {
  $('#carousel-spotify').carousel('prev');
});

next.addEventListener('click', function () {
  $('#carousel-spotify').carousel('next');
});

// Personalização: pausa do carrossel ao passar o mouse sobre ele
carousel.addEventListener('mouseover', function () {
  $('#carousel-spotify').carousel('pause');
});

carousel.addEventListener('mouseleave', function () {
  $('#carousel-spotify').carousel('cycle');
});
