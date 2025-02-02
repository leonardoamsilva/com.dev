import linux from "../../assets/images/linux.svg"
import { Code } from '../../components/Code';
import linuxData from '../../assets/commands/linux.json'

export const Linux = ({ search }) => {
  return (
    <Code title="linux" dataCommand={linuxData} search={search} img={linux} />
  );
};

