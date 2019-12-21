const inOrder = (node, output) => {
  if (node == null) return output;

  inOrder(node.left, output);
  output.push(node.data);
  inOrder(node.right, output);

  return output;
};

export { inOrder };
