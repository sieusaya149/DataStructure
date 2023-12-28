/* 
  TypeScript program for
  Constructing a full Binary Tree from an array
*/
// Binary Tree Node
class TreeNode<T>
{
	public data: T;
	public left: TreeNode<T> | null;
	public right: TreeNode<T> | null;
	constructor(data: T)
	{
		// Set node value
		this.data = data;
		this.left = null;
		this.right = null;
	}
}
export default class BinaryTree<T>
{
	public root: TreeNode<T> | null;
	constructor()
	{
		// Set initial tree root
		this.root = null;
	}
	// Display tree element inorder form
	public inOrder(node: TreeNode<T> | null): T[]
	{
		let result: T[] = []
        if(node == null)
        {
            return result
        }
        else
        {
            result =  [...result, ...this.inOrder(node.left)]
            result.push(node.data)
            result =  [...result, ...this.inOrder(node.right)]
        }
        return result
	}
	//Display tree element preorder form
	public preOrder(node: TreeNode<T> | null): T[]
	{
		let result: T[] = []
        if(node == null)
        {
            return result
        }
        else
        {
            result.push(node.data)
            result = [...result, ...this.preOrder(node.left)]
            result = [...result, ...this.preOrder(node.right)]
        }
        return result
	}
	// Display tree element post order form
	public postOrder(node: TreeNode<T> | null): T[]
	{
		let result: T[] = []
        if(node == null)
        {
            return result
        }
        else
        {
            result = [...result, ...this.postOrder(node.left)]
            result = [...result, ...this.postOrder(node.right)]
            result.push(node.data)
        }
        return result

	}
	// Constructing binary tree using given array
	public fullBinaryTree(arr: T[], size: number, location: number): TreeNode<T> | null
	{
		if (location >= size)
		{
			return null;
		}
		// Create new node
        var head = null
        if(arr[location] != null)
        {
            head = new TreeNode<T>(arr[location]);
            // build left subtree
            head.left = this.fullBinaryTree(arr, size, (location * 2) + 1);
            // build right subtree
            head.right = this.fullBinaryTree(arr, size, (location * 2) + 2);
        }
		return head;
	}
	public static main(args: string[])
	{
		// Create a new tree
		var tree = new BinaryTree<number>();
		var arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		// Get the size of array
		var size = arr.length;
		tree.root = tree.fullBinaryTree(arr, size, 0);
		/*
		           1
		         /   \
		        2     3
		       / \   /  \
		      4   5 6    7
		     / \       
		    8   9 
		*/
        console.log(tree)
		// console.log("\nIn-order Data   :");
		const inorderNodes = tree.inOrder(tree.root);
		console.log(`\nPre-order Data  : ${inorderNodes}`);
		// tree.preOrder(tree.root);
		// console.log("\nPost-order Data :");
		// tree.postOrder(tree.root);
	}
}
