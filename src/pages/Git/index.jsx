
import { Code } from '../../components/Code';
import gitData from '../../assets/commands/git.json'

export const Git = ({ search }) => {

  return (
    <Code title="git" dataCommand={gitData} search={search}/>
  );
};