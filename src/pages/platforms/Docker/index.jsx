import docker from "../../../assets/images/docker.svg";
import { Code } from "../../../components/common/Code";
import dockerData from "../../../assets/commands/docker.json";

export const Docker = ({ search }) => {
  return (
    <Code title="docker" img={docker} dataCommand={dockerData} search={search} />
  );
};