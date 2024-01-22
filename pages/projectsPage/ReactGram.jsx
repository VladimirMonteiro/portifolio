import './ProjectPage.module.css'


import styles from './ProjectPage.module.css'
import ambiente from '../../src/assets/teste22.jpeg'
import BackgroundImage from '../../src/components/backgroundImage/BackgroundImage'
import ReactGramImage from '../../src/assets/reactGram.png'
import teste from '../../src/assets/gif.gif'









const ReactGram = ()=> {

 

    return(
        <section className={styles.container}>
            
                <BackgroundImage image={ambiente} width='100%' height='250px' color='rgba(0, 0, 0, 0.356)' />
            <div className={styles.description}>
                
                <h2>ReactGram</h2>

                <p>O projeto ReactGram foi desenvolvido afim de aperfeiçoar minhas habilidades como desenvolvedor nas principais tecnologias do mercado. Neste projeto tive contato com diversas tecnologias que pertencem a sistemas atuais, como autenticação do usuário, cadastro de imagens, validações, criptográfia de senhas e tive oportunidade de ter contato com o Redux uma ferramenta poderosa para gerenciamento de estado com react. O projeto consite em um cópia do Instragram com apenas suas finalidades basicas como fazer posts, comentários, curtir fotos, realizar atualizaçao de posts e excluir fotos.
                </p>

                <h2>Metodologia</h2>
                <p>O projeto consiste em um desenvolvimento fullstack onde foi realizado a criação do backend em Nodejs para fazer a comunicação com o frontend. O backend foi desenvolvido para que fosse capaz de receber as requisiçoes do frontend e realizar o registro do usuário, seu login, criar seus posts, comentarios, curtidas. O backend recebe todo os dados do frontend e realiza uma série de validaçoes antes de realizar as açoes do sistema. além disso o backend é capaz de cadastrar e excluir fotos do sistema através da biblioteca multer. O sitema possui várias rotas protejidas que necessitam de um token de autenticação enviado pelo backend oque proporciona uma segurança significativa para o projeto, para isto foi usado jsonwebtoken para realizar a criação do token.</p>
                <h3>Tecnologias usadas:</h3>
                <ul>
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>React</li>
                    <li>Redux</li>
                    <li>MongoDB (banco de dados não relacional)</li>
                    <li>Nodejs</li>
                </ul>
              
                <p style={{margin: '10px 0', fontWeight: 'bold'}}>link para o site <a href="https://react-gram-two.vercel.app/login" target='_blank'>https://react-gram-two.vercel.app/login/</a></p>
            </div>
            <div className={styles.image_project}>
                <img src={ReactGramImage} alt={'ReactGram'} />
               

            </div>
            
        </section>
    )
}


export default ReactGram