import { Code } from '../../components/Code';
import macData from '../../assets/commands/mac.json'

export const Mac = ({ search }) => {
  return (
    <Code title="mac" dataCommand={macData} search={search}/>
  );
};

