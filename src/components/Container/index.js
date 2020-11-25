import Box from "../Box";

function Container(props) {
  return (
    <Box width={{ xs: 1, sm: 400, md: 600, lg: 1000 }} mx="auto" {...props} />
  );
}

export default Container;
