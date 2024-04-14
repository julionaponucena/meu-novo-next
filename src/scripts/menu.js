//Capturando menu e submenu da pagina

var menu = document.querySelectorAll('.menu-dropdow')
var subMenu = document.querySelectorAll('.menu ul ul')
var nav = document.querySelector('nav')
var menuDrop = document.querySelectorAll('.big-menu')
var close=document.querySelector('.botao-fechar')
var span = document.querySelectorAll('.menu i')


//Menu lateral mobile



  var corpo = document.querySelector('main')

  var btn_js=document.querySelector('.botao-abrir')
  
  var topo = document.querySelector('header')
  var navbar=document.querySelector('.menu-itens')
  close.addEventListener('click', fechar)
  topo.addEventListener('click',fechar)
  corpo.addEventListener('click',fechar)
  btn_js.addEventListener('click',abrir)
  //inserindo funcao para abrir menu lateral
  function abrir (){
  
    
    navbar.classList.remove('fechado')
    navbar.classList.add('aberto')
  }
  function fechar () {
    navbar.classList.remove('aberto')
    navbar.classList.add('fechado')
  
  }
  

  


  //funcao para aparecer o submenus de cada menu com o evento de click
  function mostrar (posicao){
    menu[posicao].addEventListener('click',function(){
    
  if(subMenu[posicao].classList.contains('hide')){
    menuDrop[posicao].classList.add('sem-dec') 
   
      
    subMenu[posicao].classList.add('show')
    subMenu[posicao].classList.remove('hide')
    span[posicao].classList.add('rotate')
    }
  else{
    menuDrop[posicao].classList.remove('sem-dec')
    
      
    subMenu[posicao].classList.add('hide')
    subMenu[posicao].classList.remove('show')
    span[posicao].classList.remove('rotate')
  }
  })
}

    for (var i = 0; i< menu.length ; i++){
    
      mostrar(i)}  
    
