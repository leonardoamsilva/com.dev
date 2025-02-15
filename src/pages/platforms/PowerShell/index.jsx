import powershell from "../../../assets/images/shell.svg"
import { Code } from '../../../components/common/Code';
import powershellData from '../../../assets/commands/powershell.json'

export const PowerShell = ({ search }) => {
  return (
    <Code title="powershell" dataCommand={powershellData} search={search} img={powershell} />
  );
};

