import HeadConfig from "../../include/head"
import Header from "../../include/header"
import Menu from "../../include/menu"
import Footer from "../../include/footer"
import Principal from "../../supertags/principal"
import Titulo from "../../supertags/titulo"

function Psicanalise_42 (){
    return (
        <>
        <HeadConfig/>
        <Header/>
        <Principal>
            <Titulo>PSICANÁLISE PARA MUDANÇA NA &ldquo;PREDESTINAÇÃO&rdquo;</Titulo>
            <p>Destino aqui não quer dizer nada místico. Podemos mudar tranquilamente para uma mudança nas condições de vida. Por exemplo, um paciente procura a terapia porque não sabe o que quer fazer em sua profissão. Não quer continuar na carreira, está desempregado e não sabe como se reencontrar. Quando (por uma mudança do &ldquo;destino&rdquo;) surge uma novíssima oportunidade – dentro da mesma carreira – mas com outras formas de atuação, a terapia está concluída. Neste caso, não quer dizer que são situações externas que vão fazer com que o processo terapêutico acabe, mas, ao ter a sua situação mudada, a nova possibilidade de vivência exterior acaba com a tensão interna anterior.</p>
        </Principal>
        <Footer/>
        </>
    )
}
export default Psicanalise_42