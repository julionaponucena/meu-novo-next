var modificado = []
var objModificado = []
class Artigo{
    constructor(imagem,t,l){
        this.img = imagem;
        this.titulo = t
        this.link = l
    }
}

function aumentar(vetor){
  modificado =  vetor.map(function(item){
        let letrasMa = item.titulo.toUpperCase()
        return letrasMa
    })
    return modificado
}
function juntar (vetor,titulo){
    
    for(let i=0; i <vetor.length; i++){
      
      modificado[i] = new Artigo(vetor[i].img,titulo[i],vetor[i].link)
      
    
    }
return modificado
    
}
function geradorLinks (obj,secao) {
    for (let artig of obj){
        let conteudo = `<a href="${artig.link}" class="hiper-link  ">
                        <img  src="Img/${artig.img}"   data-src="Img/" >
                        <p>${artig.titulo}</p>
                        </a>
        `
        secao.innerHTML += conteudo
       
    }
}
function imagemGradual (elemento){
   }
export default {
    aumentar,
    juntar,
    geradorLinks,
    imagemGradual
}