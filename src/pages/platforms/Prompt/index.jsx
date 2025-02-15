import prompt from "../../../assets/images/prompt.svg"
import { Code } from '../../../components/common/Code';
import promptData from '../../../assets/commands/prompt.json'

export const Prompt = ({ search }) => {
  return (
    <Code title="prompt ( cmd )" dataCommand={promptData} search={search} img={prompt} />
  );
};

