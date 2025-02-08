import { NavLink } from 'react-router-dom'
import './style.css'

export const Footer = () => {
  return (
    <footer>
      <ul>
        <li className="first">© 2025 comandos.dev</li>
        <li><NavLink to="/about"> about us</NavLink></li>
        <li><NavLink to="/faq"> faq</NavLink></li>
        <li><NavLink to="/contact"> contact </NavLink></li>
        <li><NavLink to="/terms"> terms</NavLink></li>
        <li><NavLink to="/privacy"> privacy</NavLink></li>
      </ul>
    </footer>
);
}