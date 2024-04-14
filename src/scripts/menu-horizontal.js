var menu = document.querySelectorAll('.menu-dropdow')
var subMenu = document.querySelectorAll('nav ul ul')
var site = document.body
if (site.clientWidth>520){
    console.log('Funcionou!')
}
for (var i=0; i<menu.length;i++){
    adicionar(i)
}

function adicionar (posicao){
    menu[posicao].addEventListener('mouseenter',function(){
        subMenu[posicao].style.opacity="1"
        subMenu[posicao].style.visibility="visible"
    })
    menu[posicao].addEventListener('mouseout',function(){
        subMenu[posicao].style.opacity="0"
        subMenu[posicao].style.visibility="hidden"
    })
}