import Node from "../data-structures/Node";
import { inOrder } from "./tree-traversal";

const tree = new Node(0);
tree.left = new Node(1);
tree.right = new Node(2);

describe("In Order", () => {
  test("does stuff", () => {
    let actual = inOrder(tree, []);
    expect(actual).toStrictEqual([1, 0, 2]);
  });
});
