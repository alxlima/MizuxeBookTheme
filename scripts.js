  // Get the current year for the copyright -- função retornar ano atual para rodape.
  $('#year').text(new Date().getFullYear());

  // Init Scrollspy -- função que busco o ponto de inicio da tragetoria de um objeto navBar definido.
  $('body').scrollspy({ target: '#main-nav' });

  // Smooth Scrolling -- Função do Scroll menu bar rolagem suave nas informações.
  $("#main-nav a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        window.location.hash = hash;
      });
    }
  });