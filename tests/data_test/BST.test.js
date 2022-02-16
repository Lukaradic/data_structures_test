import {BinarySearchTree} from "../../components/BinarySearchTrees";

describe("Testing BST", () => {
  let bst;
  beforeEach(() => {
    bst = new BinarySearchTree();
    bst.insert(10);
    bst.insert(6);
    bst.insert(15);
    bst.insert(3);
    bst.insert(8);
    bst.insert(20);
  });
  it("should find a value", () => {
    expect(bst.find(10)).toBeTruthy();
    expect(bst.find(6)).toBeTruthy();
    expect(bst.find(15)).toBeTruthy();
    expect(bst.find(0)).toBeFalsy();
  });
  it("should do bfs pre order", () => {
    expect(bst.bfs()).toStrictEqual([10, 6, 15, 3, 8, 20]);
  });
  it("should do dfs pre order", () => {
    expect(bst.dfsPre()).toStrictEqual([10, 6, 3, 8, 15, 20]);
  });
  it("should do dfs post order", () => {
    expect(bst.dfsPost()).toStrictEqual([3, 8, 6, 20, 15, 10]);
  });
  it("should do dfs in order", () => {
    expect(bst.dfsInOrder()).toStrictEqual([3, 6, 8, 10, 15, 20]);
  });
});
