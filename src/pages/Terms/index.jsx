import { NavLink } from 'react-router-dom'
import './style.css'

export const Terms = () => {
  return (
     <article className='container'>
        <header>
            <h1>termos</h1>
        </header>

        <section>
            <h2>aceitação dos termos</h2>
            <p>ao acessar ou usar o site <strong>comandos.dev</strong>, você concorda em
                cumprir e estar vinculado aos termos e condições descritos abaixo. Se você não concorda com estes
                termos, por favor, não utilize o site.</p>
        </section>

        <section>
            <h2>descrição do Serviço</h2>
            <p>o <strong>comandos.dev</strong> oferece uma plataforma onde desenvolvedores podem acessar, compartilhar
                e armazenar comandos úteis para várias plataformas e ferramentas utilizadas no desenvolvimento de
                software. A plataforma oferece um repositório de comandos para facilitar o trabalho dos desenvolvedores.</p>
        </section>

        <section>
            <h2>uso do Serviço</h2>
            <p>você pode utilizar o <strong>comandos.dev</strong> para:</p>
            <ul>
                <li>consultar e buscar comandos de várias plataformas.</li>
                <li>salvar, compartilhar e contribuir com novos comandos.</li>
            </ul>
            <p>você concorda em utilizar o <strong>comandos.dev</strong> apenas para fins legais e de acordo com as leis
                aplicáveis à sua jurisdição.</p>
        </section>

        <section>
            <h2>conteúdo gerado pelo usuário</h2>
            <p>os usuários podem contribuir com comandos e outros conteúdos para o site. Ao enviar conteúdo, você
                garante que tem o direito de compartilhá-lo e concorda com a seguinte licença:</p>
            <ul>
                <li>você concede ao <strong>comandos.dev</strong> uma licença não exclusiva, mundial, isenta de
                    royalties, transferível e sublicenciável para usar, modificar, adaptar, publicar e distribuir esse
                    conteúdo, de acordo com os fins do site.</li>
                <li>você é responsável pelo conteúdo que envia, incluindo sua conformidade com as leis de propriedade
                    intelectual e as normas de comportamento online.</li>
            </ul>
        </section>

        <section>
            <h2>comportamento e proibições</h2>
            <p>ao utilizar o <strong>comandos.dev</strong>, você concorda em não:</p>
            <ul>
                <li>submeter ou compartilhar conteúdo que seja ilegal, ofensivo, prejudicial ou que viole os direitos de
                    propriedade intelectual de terceiros.</li>
                <li>realizar qualquer atividade que prejudique a integridade do site, como ataques cibernéticos,
                    disseminação de malware, ou interferir no funcionamento do site.</li>
                <li>utilizar o site de forma a violar as leis ou regulamentos aplicáveis.</li>
            </ul>
        </section>

        <section>
            <h2>isenção de responsabilidade</h2>
            <p>embora o <strong>comandos.dev</strong> se esforce para fornecer comandos úteis e precisos, o conteúdo
                compartilhado no site é fornecido "como está". O <strong>comandos.dev</strong> não garante a precisão,
                confiabilidade ou eficácia dos comandos. O uso de qualquer comando compartilhado no site é de sua inteira
                responsabilidade.</p>
            <p>não nos responsabilizamos por qualquer dano direto, indireto, incidental, especial ou consequencial
                decorrente do uso do conteúdo fornecido no site, incluindo, mas não se limitando a, danos causados por
                falhas ou erros nos comandos.</p>
        </section>

        <section>
            <h2>modificações no serviço e termos</h2>
            <p>o <strong>comandos.dev</strong> reserva-se o direito de modificar, suspender ou descontinuar o site ou
                qualquer parte dele a qualquer momento, sem aviso prévio. Também podemos atualizar ou alterar estes
                Termos de Uso a qualquer momento. Quaisquer alterações serão publicadas nesta página, e a data de revisão
                será atualizada.</p>
            <p>é de sua responsabilidade revisar regularmente os Termos de Uso para se manter informado sobre quaisquer
                mudanças.</p>
        </section>

        <section>
            <h2>privacidade</h2>
            <p>o <strong>comandos.dev</strong> coleta e processa informações pessoais conforme descrito na nossa
                <NavLink to='/privacy'> Política de Privacidade</NavLink>. Ao usar o site, você concorda com a coleta
                e o uso dessas informações conforme estabelecido na política.</p>
        </section>

        <section>
            <h2>links de terceiros</h2>
            <p>o site pode conter links para sites de terceiros. O <strong>comandos.dev</strong> não se responsabiliza
                pelo conteúdo, práticas de privacidade ou segurança de sites externos. Ao acessar esses links, você o faz
                por sua conta e risco.</p>
        </section>

        <section>
            <h2>limitação de responsabilidade</h2>
            <p>na medida permitida pela lei aplicável, o <strong>comandos.dev</strong> não será responsável por quaisquer
                danos, perdas ou prejuízos resultantes do uso ou da incapacidade de uso da plataforma, incluindo danos
                diretos, indiretos, incidentais, especiais ou consequenciais.</p>
        </section>

        <section>
            <h2>lei Aplicável</h2>
            <p>estes Termos de Uso serão regidos e interpretados de acordo com as leis do país onde o <strong>comandos.dev</strong> está registrado, sem considerar conflitos de princípios legais. quaisquer disputas serão resolvidas nos tribunais competentes da jurisdição onde a empresa responsável pelo site está localizada.</p>
        </section>

        <section>
            <h2>contato</h2>
            <p>se você tiver dúvidas sobre estes Termos de Uso ou sobre o <strong>comandos.dev</strong>, entre em contato conosco através do seguinte endereço de e-mail: <a href="mailto:comandosdev@gmail.com">comandosdev@gmail.com</a>.</p>
        </section>

    </article> 
    );
};