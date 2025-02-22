import { NavLink } from 'react-router-dom';
import './style.css';

export const Info = () => {
  return (
    <div className='info'>
      <p>ℹ️ a escolha por escrever tudo em minúsculas é proposital! 💡 ela faz parte da nossa identidade e é algo que muitos desenvolvedores gostam.  😉 <span><NavLink to="/feedback" >Curtiu? Conta pra gente! 💬</NavLink></span></p>
      <div className="announcement">
        <ins
          class="adupeex"
          data-ad-client="up-ba-332124"
          data-ad-slot="37742"
          data-ad-display="square"
        >
        </ins>
        <script src="https://upeex.com.br/adsupeex.js" async>
        </script>
      </div>

    </div>
  );
};