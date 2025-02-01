import { Code } from '../../components/Code';
import vscodeData from '../../assets/commands/vscode.json'

export const Vscode = ({ search }) => {
  return (
    <Code title="vscode" dataCommand={vscodeData} search={search}/>
  );
};

