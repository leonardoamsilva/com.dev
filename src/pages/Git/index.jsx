import { Code } from '../../components/Code';
import gitData from '../../assets/commands/git.json'

export const Git = () => {
  return (
    <Code title="git" dataCommand={gitData}/>
  );
};

