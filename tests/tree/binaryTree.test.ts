import BinaryTree from '../../src/tree/BinaryTree'

describe('', () => {
    
    beforeEach(() => {
    });
    it('Initial Binary Tree Checking Traversal', () => {
        var tree = new BinaryTree<number>();
		var arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		// Get the size of array
		var size = arr.length;
		tree.root = tree.fullBinaryTree(arr, size, 0);
        const preOrderNodes = tree.preOrder(tree.root)
        expect(preOrderNodes.length).toBe(size)
        expect(preOrderNodes).toEqual([1,2,4,8,9,5,3,6,7])

        const inOrderNodes = tree.inOrder(tree.root)
        console.log(inOrderNodes)
        expect(inOrderNodes.length).toBe(size)
        expect(inOrderNodes).toEqual([8,4,9,2,5,1,6,3,7])


        const postOrderNodes = tree.postOrder(tree.root)
        console.log(postOrderNodes)
        expect(postOrderNodes.length).toBe(size)
        expect(postOrderNodes).toEqual([8,9,4,5,2,6,7,3,1])

    });
})