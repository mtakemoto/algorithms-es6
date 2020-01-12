import { inOrder, postOrder, preOrder } from "./tree-traversal";

import Node from "../data-structures/Node";

const tree = new Node(0);
tree.left = new Node(1);
tree.right = new Node(2);

//Left, root, right
describe("In Order", () => {
  test("does stuff", () => {
    let actual = inOrder(tree, []);
    expect(actual).toStrictEqual([1, 0, 2]);
  });
});

//Root, left, right
describe("Pre Order", () => {
  test("prints basic tree", () => {
    let actual = preOrder(tree, []);
    expect(actual).toStrictEqual([0, 1, 2]);
  })
})

//Left, right, root
describe("Post Order", () => {
  test("prints basic tree", () => {
    let actual = postOrder(tree, []);
    expect(actual).toStrictEqual([1, 2, 0]);
  })
})

