import Head from "next/head";
import Header from "../../include/header";
import Menu from "../../include/menu";
import Footer from "../../include/footer";
import Principal from "../../supertags/principal";
import Titulo from "../../supertags/titulo";

function Filosofia_09 (){
 return(    <>
        <Head>
            <title></title>
            <meta name="keywords" content="diferença entre ética e moral"/>
        </Head>
        <Header/>
        <Menu/>
        <Principal>
            <Titulo>DIFERENÇA ENTRE ÉTICA E MORAL</Titulo>
            <p>Em principio, cabe dizer que os termos ética e moral são usados, muitas vezes, de maneira confusa. Cabe aqui entender o significado etimológico desses dois termos:</p>
            <p>Moral: vem da língua latina, mos-mores, significa costumes ou regras que determinam a vida. Por isso, dizemos que a moral indica normas e valores que orientam a vida do homem numa sociedade.</p>
            <p>Assim, a moral busca distinguir o certo do errado, o justo do injusto, o permitido do proibido, o bem do mal. Procura determinar quais ações e atitudes se devem adotar. Quem diz quais são os deveres morais de uma pessoa? A primeira resposta parece ser o grupo social, a turma. Como cada grupo, turma pode ter idéias e ideais diferentes, podemos ter várias morais numa mesma sociedade.</p>
            <p>Ética: vem da língua grega, ethos, significa modo de ser, a forma usada pela pessoa para organizar sua vida em sociedade. É o processo feito pela pessoa de transformar em normas/regras práticas e valores surgidos no grupo e na cultura em que vive.</p>
            <p>Assim, a ética tem a moral como base de estudo. Seu papel é analisar as opções feitas pelas pessoas, avaliar os costumes. É a reflexão crítica da moral do grupo, no contexto social e histórico em que ele se encontra. Busca questionar os fundamentos da moral e sua validade. Sendo assim, a ética preocupa-se com analisar, na ação e reflexão, os conflitos do dia-a-dia.</p>
            <p>Uma pessoa pode, diante dos comportamentos humanos, da sociedade em que vive, ter uma atitude ética passiva ou ativa.</p>
            <p>Atitude ética passiva é quando a pessoa deixa-se governar por impulsos, inclinações e paixões, balança conforme o momento. Temos, então, uma pessoa que se deixa levar pela boa ou má sorte, pelas opiniões alheias, por medo e vontade dos outros, não tendo consciência, vontade, liberdade e, portanto, responsabilidades.</p>
            <p>Atitude ética ativa é a da pessoa que controla seus impulsos, suas inclinações e paixões, que se questiona sobre o sentido dos valores e dos fins estabelecidos, avalia suas ações diante das regras de conduta, age conscientemente, respeita os outros, é responsável, é autônoma.</p>
        </Principal>
        <Footer/>
    </>)
}
export default Filosofia_09