import artigoFilosofia from "./filosofia-itens";
import artigo from "./menu-itens";
import modificador from "./modificador";
class Artigo{
    constructor(imagem,t,l){
        this.img = imagem;
        this.titulo = t
        this.link = l
    }
}

var titulos = modificador.aumentar(artigoFilosofia)

var artigoFinal = modificador.juntar(artigoFilosofia,titulos) 


var container = document.querySelector('.hiper-menu')


modificador.geradorLinks(artigoFinal,container)
/*for (let artigoAtual of artigoFinal){
    let conteudo = `<a href="${artigoAtual.link}" class="hiper-link">
                        <img src="Img/mente.jpeg">
                        <p>${artigoAtual.titulo}</p>
                    </a>
    
    `
    container.innerHTML += conteudo 
}*/
