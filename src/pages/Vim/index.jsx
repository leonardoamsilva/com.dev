import { Code } from '../../components/Code';
import vimData from '../../assets/commands/vim.json'

export const Vim = () => {
  return (
    <Code title="vim" dataCommand={vimData}/>
  );
};

