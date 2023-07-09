interface Props {
  name?: string;
}

const Greet = (props: Props) => {
  const { name } = props;

  return <div>Namaskar{name && `, ${name} ji`}</div>;
};

export default Greet;
