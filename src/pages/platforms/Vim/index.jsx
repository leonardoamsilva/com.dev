import vim from "../../../assets/images/vim.svg"
import { Code } from '../../../components/common/Code';
import vimData from '../../../assets/commands/vim.json'

export const Vim = ({ search }) => {
  return (
    <Code title="vim" dataCommand={vimData} search={search} img={vim} />
  );
};

