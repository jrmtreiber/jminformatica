let index = 0;
function moveSlide(step) {
    const images = document.querySelector('.carousel-images');
    const totalImages = document.querySelectorAll('.carousel-images img').length;
    index += step;
    if (index >= totalImages) index = 0;
    if (index < 0) index = totalImages - 1;
    images.style.transform = `translateX(-${index * 100}%)`;
}

// 

window.onscroll = function() {
    stickyHeader();
  };
  
  var header2 = document.getElementById("header2");
  
  function stickyHeader() {
    // Verifica se a largura da tela é maior que 768px (desktop)
    if (window.innerWidth > 768) {
      if (window.pageYOffset > 100) {
        header2.style.position = "fixed";
        header2.style.top = "0";
      } else {
        header2.style.position = "absolute"; // Retorna ao comportamento normal
        header2.style.top = "auto";
      }
    } else {
      // Se for mobile, não faz nada (pode também garantir que o header não seja alterado)
      header2.style.position = "absolute";
      header2.style.top = "auto";
    }
  }
  
  