export const generateRandomString = (lenght: number) =>
{
    let uuid = '';
    const charaters=`asdfghjklzxcvbnmqwertyuiop0123456789ASDFGHJKLZXCVBNMQWERTYUIOP0123456789`
    const randomRange = charaters.length - 1
    for(let i = 0; i < lenght; i++)
    {
        const charaterIndex = Math.floor(Math.random() * randomRange);
        uuid += charaters[charaterIndex]
    }
    return uuid
}

function printTree<T>(root: TreeNode<T>)
{

}

export interface ITreeNode<T> {
    id: string;
    data: T; 
    parent: ITreeNode<T> | null;
    children: ITreeNode<T>[];
    addChild(node: ITreeNode<T>): void;  // Add a child node to this node
    removeChild(node: ITreeNode<T>): void;  // Remove a child node from this node
    isLeaf(): boolean;  // Check if this node is a leaf (has no children)
    isRoot(): boolean;  // Check if this node is the root (has no parent)
    getDepth(): number;  // Get the depth of this node in the tree
    find(data: T): ITreeNode<T>[];  // Find a node with the given data in the subtree rooted at this node
}

export class TreeNode<T> implements ITreeNode<T>{
    id: string;
    data: T;
    parent: ITreeNode<T> | null = null;
    children: ITreeNode<T>[] = [];
    constructor(data: T, parent: ITreeNode<T> | null = null)
    {
        this.id = generateRandomString(16)
        this.data = data
        if(!parent)
        {
            this.parent = parent;
        }
    }

    isLeaf(): boolean {
        return this.parent != null;
    }

    isRoot(): boolean {
        return this.parent == null;
    }

    addChild(node: ITreeNode<T>): void {
        node.parent = this
        this.children.push(node)
    }

    removeChild(node: ITreeNode<T>): void {
        for(let i = 0; i < this.children.length; i++)
        {
            if(node.id == this.children[i].id)
            {
                // should clean this node
                node.parent = null
                this.children.splice(i, 1)
            }
        }
    }

    // because the tree allow duplicate data so it return array rather than empty
    find(data: T): ITreeNode<T>[] {
        console.log('finding')
        // parent has child and child no has any child
        // parent dont have any child
        // paret has childs and child has childs
        let result: ITreeNode<T>[] = []
        if(this.children.length == 0)
        {
            return result
        }
        else
        {
            for(let i = 0; i < this.children.length; i++)
            {
                if(this.children[i].data == data)
                {
                    result.push(this.children[i])
                }
            }
            for(let i = 0; i < this.children.length; i++)
            {
                result = [...result, ...this.children[i].find(data)]
            }
        }
        return result
    }

    getDepth(): number {
        if(this.children.length == 0)
        {
            return 1;
        }
        else
        {
            let result = 0;
            for (let i = 0; i < this.children.length; i++)
            {
                let branchDepth = 1 + this.children[i].getDepth()
                if(branchDepth > result)
                {
                    result = branchDepth
                }
            }
            return result
        }
    }
}
