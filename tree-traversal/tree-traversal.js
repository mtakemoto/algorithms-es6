const inOrder = (node, output) => {
  if (node == null) return output;

  inOrder(node.left, output);
  output.push(node.data);
  inOrder(node.right, output);

  return output;
};

const preOrder = (node, output) => {
  if (node == null) return output;

  output.push(node.data);
  preOrder(node.left, output);
  preOrder(node.right, output);

  return output;
}

const postOrder = (node, output) => {
  if (node == null) return output;

  postOrder(node.left, output);
  postOrder(node.right, output);
  output.push(node.data);

  return output;
}

export { inOrder, preOrder, postOrder };
