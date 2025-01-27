import { Code } from '../../components/Code';
import linuxData from '../../assets/commands/linux.json'

export const Linux = () => {
  return (
    <Code title="linux" dataCommand={linuxData}/>
  );
};

