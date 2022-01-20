import Head from "next/head";
import Header from "../../include/header";
import Menu from "../../include/menu";
import Footer from "../../include/footer";
import Principal from "../../supertags/principal";
import Titulo from "../../supertags/titulo";

function Filosofia_13 (){
    const palavra = "..Como não temos a capacidade de eliminar todas as nossas dificuldades, podemos correr nas farmácias e consultórios em busca dessa capacidade.."
    return (
        <>
        {console.log(palavra.length)}
        <Head>
            <title>Quando o Remédio Causa Doenças</title>
            <meta name="keywords" content="doença psicológica"/>
            <meta name="description" content="..Como não temos a capacidade de eliminar todas as nossas dificuldades, podemos correr nas farmácias e consultórios em busca dessa capacidade.."/>
        </Head>
        <Header/>
        <Menu/>
        <Principal>
            <Titulo>QUANDO O REMÉDIO CAUSA DOENÇAS</Titulo>
            <p>Os autores reforçam a tese de que vivemos em uma sociedade onde o imediatismo está cada vez mais em evidência. A busca desenfreada pela satisfação das necessidades de qualquer natureza parece não ter limites, sobretudo em relação àquelas necessidades pertencentes à nossa esfera existencial. Como não podemos ver atendidas todas essas necessidades, nos colocamos em uma ciranda que parece não ter fim, ou seja, diante da busca indiscriminada pela satisfação de uma determinada necessidade, corremos o risco de criar outras demandas ainda maiores, ocasião em que a relação custo-benefício nos fica desfavorável. Tomemos como exemplo a afirmação proferida pelos autores, quando dizem que “o consumo desenfreado de anorexígenos pelos brasileiros- e, especialmente, pelas brasileiras, porque as mulheres consomem de seis a oito vezes mais que os homens – traz a reboque um outro problema: o aumento da procura por ansiolíticos”. Isso provavelmente se deve ao fato de que, movidos pela análise superficial que estamos habituados a fazer das coisas, somados à urgência com que buscamos a solução para os problemas que julgamos possuir, nos atemos muito mais, ou tão somente, aos assuntos imediatos, quando deveríamos processar uma busca para as reais questões que nos afligem, que são os assuntos últimos.</p>
           <p>Assistindo a maneira das pessoas se portarem na sociedade, a forma com que seus valores são construídos, destruídos e reconstruídos, nos damos conta de que parece haver uma espécie de adestramento social, uma versão atualizada da Cama de Procusto, a partir do qual as pessoas são treinadas a olhar o mundo como uma grande loja cheia de objetos à sua disposição, para serem usados e imediatamente descartados. Isso faz com que tratemos das relações inter e intra-pessoais de maneira muito superficial, gerando assim a prática de descartarmos também aquilo que pode servir como base para a construção dos elementos que nos tornarão capacitados a lidar de maneira salutar com as dificuldades inerentes à nossa existência. Como não possuímos essas condições, corremos para os consultórios ou para os balcões das farmácias a procura da pílula que nos libertará de todos os males, não se importando se essa “pílula da felicidade”, de acordo com o que é citado no texto nos trará a verdadeira felicidade, ou nos acarretará mais sofrimento, conforme nos alerta Epicuro, ao nos alertar para que busquemos os prazeres duradouros e evitemos aqueles que cujo preço é o sofrimento. Aqui vale citar admoestação do Professor Lúcio Packter em uma de suas aulas, quando ele diz que da mesma forma que a indústria farmacêutica se especializaram em produzir antidepressivos, seria aconselhável que elas pensassem também na possibilidade de colocar à disposição do consumidor, medicamentos depressivos, afim de que o cliente pudesse contar também com esta outra opção, partindo-se do princípio que a dor poderá apenas ser um sintoma de algo maior o qual, ainda de acordo com Lúcio Packter, pode muito bem ser mascarado pelo uso dos fármacos, o que compromete seriamente a localização e consequentemente a solução daquilo que de fato está comprometendo a vida do indivíduo.</p>
           <p>Como conclusão vale citar um trecho dos Titãs, quando eles nos alertam que &quot;fugir da dor é fugir da própria cura&quot;. É inevitável aqui a associação com Nietzsche que ao que parece serviu de inspiração para esta brilhante canção.</p>
        </Principal>
        <Footer/>
        </>
    )
}
export default Filosofia_13