import styles from './ProjectPage.module.css'
import ambiente from '../../src/assets/teste22.jpeg'
import BackgroundImage from '../../src/components/backgroundImage/BackgroundImage'
import up_locaçoes from '../../src/assets/teste3.png'



//Components







const UpLocacoes = ()=> {

   

    return(
        <section className={styles.container}>
            
                <BackgroundImage image={ambiente} width='100%' height='250px' color='rgba(0, 0, 0, 0.356)' />
            <div className={styles.description}>
                
                <h2>Up Locações</h2>

                <p>O projeto Up Locações foi elaborado com afinidade de aprimorar a conexão entre a empresa Up Locações e seu público. Cada elemento, desde o design até a navegação intuitiva, foi criado com a intenção de oferecer uma experiência envolvente aos visitantes, fortalecendo assim a relação entre a marca/indivíduo e seu público-alvo. Com seções intuitivas e uma arquitetura de informação lógica, este site é uma fonte valiosa de informações sobre a empresa. Os visitantes podem explorar facilmente produtos e serviços, obtendo uma visão abrangente do que torna Up Locações excepcional.</p>

                <h2>Metodologia</h2>
                <p>Foi realizado uma reunião com o cliente para entender mais sobre suas necessidades e oque o mesmo precisava e esperava sobre o projeto. Após esta reunião e entender o que o cliente desejava, foi iniciado o projeto afim de ser entregue o mais rapido possivel e com a maior qualidade. Ao decorrer do projeto a todo tempo o cliente estava acompanhando a evolução do trabalho realizado. </p>
                <h3>Tecnologias usadas:</h3>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>React</li>
                    <li>MongoDB (banco de dados não relacional)</li>
                    <li>Nodejs</li>
                </ul>
                <p>Para o frontend foi usado HTML5, CSS3 e Javasript junto ao framework React e seus hooks com intuito de deixar o um projeto de SPA (Single Page Aplication), afim de tornar o site mais dinâmico. Para o backend feito em Nodejs junto com framework Express foi costruido uma API para que fosse possível cadastrar as imagens e suas descrições para serem recebido no frontend. O backend foi construido para que fosse capaz de se conectar ao banco de dados (MongoDB),recebimento de e-mail através do formulário de contato e tivesse endpoints para o recebimento de todos os dados neccesários para enviar para o frontend.</p>
                <p style={{margin: '10px 0', fontWeight: 'bold'}}>link para o site <a href="https://up-locations.vercel.app/" target='_blank'>https://up-locations.vercel.app/</a></p>
            </div>
            <div className={styles.image_project}>
                <img src={up_locaçoes} alt={'Up-Locaçoes'} />

            </div>
            
        </section>
    )
}


export default UpLocacoes