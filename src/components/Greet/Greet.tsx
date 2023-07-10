import { GreetProps } from "./Greet.types";

const Greet = (props: GreetProps) => {
  const { name } = props;

  return <div>Namaskar{name && `, ${name} ji`}</div>;
};

export default Greet;
