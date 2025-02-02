import git from "../../../assets/images/git.svg";
import { Code } from '../../../components/common/Code';
import gitData from '../../../assets/commands/git.json'

export const Git = ({ search }) => {

  return (
    <Code title="git" img={git} dataCommand={gitData} search={search}/>
  );
};