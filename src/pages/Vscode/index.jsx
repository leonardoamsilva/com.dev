import vscode from "../../assets/images/vscode.svg"
import { Code } from '../../components/Code';
import vscodeData from '../../assets/commands/vscode.json'

export const Vscode = ({ search }) => {
  return (
    <Code title="vscode" dataCommand={vscodeData} search={search} img={vscode} />
  );
};

