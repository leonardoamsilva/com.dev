import './style.css';


export const Code = ({ title, dataCommand }) => {
  
   // Função para copiar o texto do elemento pai do botão clicado
  const copiarTexto = (e) => {
    // Obtém o elemento pai (parentElement) do botão clicado
    const texto = e.target.closest('.parent-element').textContent; // Obtém o texto do pai

    navigator.clipboard.writeText(texto)
      .then(() => {
        console.log(e.target)
        e.target.style.color = "green";
        setTimeout(() => {
          e.target.style.color = "currentColor";
        },1000)

      })
      .catch(err => {
        console.error('Erro ao copiar o texto: ', err);
      });
  };

    return (
      <>
        <h1>{title}</h1>
        {dataCommand.map((command, index) => (
          <code key={index} ><li>{command.name}</li><p className='parent-element'>{command.code}<svg onClick={copiarTexto} className="copy copyButtonIcon_y97N" viewBox="0 0 24 24"><path fill="currentColor" d="M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"></path></svg></p></code>
        ))}
      </>
    );
  };