import artigo from "./menu-itens";
import modificador from "./modificador";

class Artigo{
    constructor(imagem,t,l){
        this.img = imagem;
        this.titulo = t
        this.link = l
    }
}



var artigoFinal=[]


var titulos = modificador.aumentar(artigo)


var container = document.querySelector('.hiper-menu')



artigoFinal = modificador.juntar(artigo,titulos)


modificador.geradorLinks(artigoFinal,container)

//let imagem = document.querySelectorAll('.hiper-link img')

//modificador.imagemGradual(imagem)

/*for (let artig of artigoFinal){
    let conteudo = `<a href="${artig.link}" class="hiper-link">
                        <img src="Img/${artig.img}">
                        <p>${artig.titulo}</p>
                    </a>

    `  
    container.innerHTML += conteudo
}*/
    

