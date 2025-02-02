import windows from "../../assets/images/windows.svg"
import { Code } from '../../components/Code';
import windowsData from '../../assets/commands/windows.json'

export const Windows = ({ search }) => {
  return (
    <Code title="windows" dataCommand={windowsData} search={search} img={windows} />
  );
};

