import { Code } from '../../components/Code';
import vimData from '../../assets/commands/vim.json'

export const Vim = ({ search }) => {
  return (
    <Code title="vim" dataCommand={vimData} search={search}/>
  );
};

