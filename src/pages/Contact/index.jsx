import { NavLink } from 'react-router-dom';

export const Contact = () => {
  return(
    <>
    <header>
        <h1>contate-nos</h1>
        <p>tem alguma dúvida ou sugestão? Estamos aqui para ajudar!</p>
      </header>

      <section>
        <h2>outros canais de contato</h2>
        <p><strong>e-mail de suporte:</strong> <NavLink to="mailto:suporte@comandos.dev">comandosdev@gmail.com</NavLink></p>
        <p><strong>redes Sociais:</strong></p>
        <ul>
          <li>twitter: <NavLink to="https://twitter.com/comandosdev" target="_blank" rel="noopener noreferrer"> @comandosdev</NavLink></li>
          <li>gitHub: <NavLink to="https://github.com/comandos-dev" target="_blank" rel="noopener noreferrer">ComandosDev</NavLink></li>
        </ul>
      </section>
    </>
  );
};