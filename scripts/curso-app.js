import artigoCursos from "./curso-itens";
import modificador from "./modificador";

let titulos = modificador.aumentar(artigoCursos)

let artigoFinal = modificador.juntar(artigoCursos,titulos)


let container = document.querySelector('.hiper-menu')

modificador.geradorLinks(artigoFinal,container)