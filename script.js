function alterarCirculo() {
    const circulo = document.getElementByld('circulo');

    const corAleatoria = '#'+
   Math.floor(Math.random()*16777215).toString(16);

    const novoTamanho = Math.floor(Math.random() * (200 - 50 + 1)) + 50;

    circulo.style.backgroundColor = corAleatoria;
   circulo.style.width = novoTamanho + 'px';
   circulo.style.height = novoTamanho + 'px';

}