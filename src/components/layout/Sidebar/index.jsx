import './style.css';
import git from "../../../assets/images/git.svg";
import powershell from "../../../assets/images/shell.svg";
import prompt from "../../../assets/images/prompt.svg"
import linux from "../../../assets/images/linux.svg"
import mac from "../../../assets/images/mac.svg"
import vscode from "../../../assets/images/vscode.svg"
import vim from "../../../assets/images/vim.svg"
import docker from "../../../assets/images/docker.svg"
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  const ativo = ({ isActive }) => isActive ? 'active-link' : '';

  return (
    <nav className="sidebar">
        <ul>
          <NavLink to="/git" className={ativo}>
            <li><img src={git} alt=""/>git</li>
          </NavLink>
          <NavLink to="/prompt" className={ativo}>
            <li><img src={prompt} alt="prompt"/> prompt ( cmd )</li>
          </NavLink>
          <NavLink to="/powershell" className={ativo}>
            <li><img src={powershell} alt="powershell"/> powershell</li>
          </NavLink>
          <NavLink to="/linux" className={ativo}>
            <li><img src={linux} alt="linux"/> linux</li>
          </NavLink>
          <NavLink to="/mac" className={ativo}>
            <li><img src={mac} alt="mac"/> mac</li>
          </NavLink>
          <NavLink to="/vscode" className={ativo}>
            <li><img src={vscode} alt="vscode"/> vscode</li>
          </NavLink>
          <NavLink to="/vim" className={ativo}>
            <li><img src={vim} alt="vim"/> vim</li>
          </NavLink>
          <NavLink to="/docker" className={ativo}>
            <li><img src={docker} alt="docker"/> docker</li>
          </NavLink>
        </ul>
      </nav>
  );
}