var janela = document.querySelector('.mold')
var imagem = document.querySelector('main img')
var imgmold = document.querySelector('.mold img')

imagem.addEventListener('click',aparecer)

function aparecer(){
    janela.style.display="block";
    imgmold.src = imagem.src
    imgmold.alt = imagem.alt
}

var btn_fechar = document.querySelector('.mold span')
btn_fechar.addEventListener('click',desaparecer)

function desaparecer (){
    janela.style.display="none";
}