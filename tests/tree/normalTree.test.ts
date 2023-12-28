import { ITreeNode, TreeNode, generateRandomString } from '../../src/tree/NormalTree';
describe('Checking Random String working', () => {
    it("Should random correctly",() =>{
        const uuid1 = generateRandomString(16)
        const uuid2 = generateRandomString(16)
        expect((()=>uuid1 == uuid2)()).toBe(false)
    })
})
describe('SingleLinkedList', () => {
    
    beforeEach(() => {
    });
    it('Initial TreeNode', () => {
        let treeNode: ITreeNode<number>
        treeNode = new TreeNode<number>(10);
        expect(treeNode.parent).toBe(null)
        expect(treeNode.children).toEqual([])
        expect(treeNode.data).toBe(10)
        expect(treeNode.getDepth()).toBe(1)
    });

    it('Add child node', () => {
        let parentNode: ITreeNode<number>
        parentNode = new TreeNode<number>(1);
        expect(parentNode.parent).toBe(null)
        expect(parentNode.children).toEqual([])
        expect(parentNode.data).toBe(1)
        let childNode1 = new TreeNode<number>(2);
        let childNode2 = new TreeNode<number>(3);
        parentNode.addChild(childNode1)
        parentNode.addChild(childNode2)
        expect(childNode1.isLeaf()).toBe(true)
        expect(childNode2.isLeaf()).toBe(true)
        expect(childNode1.parent!.data).toBe(1)
        expect(childNode2.parent!.data).toBe(1)
        
        expect(parentNode.isRoot()).toBe(true)
        expect(parentNode.children.length).toBe(2)
        expect(parentNode.children[0].data).toBe(2)
        expect(parentNode.children[1].data).toBe(3)

        expect(parentNode.getDepth()).toBe(2)

    });

    it('Remove Child Node', () => {
        let parentNode: ITreeNode<number>
        parentNode = new TreeNode<number>(1);
        expect(parentNode.parent).toBe(null)
        expect(parentNode.children).toEqual([])
        expect(parentNode.data).toBe(1)
        let childNode1 = new TreeNode<number>(2);
        let childNode2 = new TreeNode<number>(3);
        parentNode.addChild(childNode1)
        parentNode.addChild(childNode2)

        expect(parentNode.isRoot()).toBe(true)
        expect(parentNode.children.length).toBe(2)
        expect(parentNode.children[0].data).toBe(2)
        expect(parentNode.children[1].data).toBe(3)
        expect(parentNode.getDepth()).toBe(2)

        parentNode.removeChild(childNode1)
        expect(parentNode.children.length).toBe(1)
        expect(parentNode.children[0].data).toBe(3)
        expect(parentNode.getDepth()).toBe(2)
        // re-delete cannot working
        parentNode.removeChild(childNode1)
        expect(parentNode.children.length).toBe(1)
        expect(parentNode.children[0].data).toBe(3)
        expect(parentNode.getDepth()).toBe(2)


        parentNode.removeChild(childNode2)
        expect(parentNode.children.length).toBe(0)
        expect(parentNode.getDepth()).toBe(1)


        // childNode1 and 2 was removed then it is not a leaf any more
        expect(childNode1.isLeaf()).toBe(false)
        expect(childNode2.isLeaf()).toBe(false)

    });

    it('Find node', () => {
        let parentNode: ITreeNode<number>
        parentNode = new TreeNode<number>(0);
        let childNode1 = new TreeNode<number>(1);
        let childNode2 = new TreeNode<number>(2);
        parentNode.addChild(childNode1)
        parentNode.addChild(childNode2)
        let childNode3 = new TreeNode<number>(5);
        let childNode4 = new TreeNode<number>(6);
        childNode1.addChild(childNode3)
        childNode1.addChild(childNode4)
        expect(childNode1.children.length).toBe(2)
        let childNode5 = new TreeNode<number>(5);
        let childNode6 = new TreeNode<number>(6);
        let childNode7 = new TreeNode<number>(7);
        childNode2.addChild(childNode5)
        childNode2.addChild(childNode6)
        childNode2.addChild(childNode7)
        expect(childNode2.children.length).toBe(3)

        expect(parentNode.children.length).toBe(2)
        expect(parentNode.find(5).length).toBe(2)

        expect(childNode1.find(5).length).toBe(1)
        expect(childNode2.find(5).length).toBe(1)


        let childNode8 = new TreeNode<number>(5);
        let childNode9 = new TreeNode<number>(6);

        childNode3.addChild(childNode8)
        childNode3.addChild(childNode9)

        let childNode10 = new TreeNode<number>(6);
        let childNode11 = new TreeNode<number>(7);
        childNode5.addChild(childNode10)
        childNode5.addChild(childNode11)

        let childNode12 = new TreeNode<number>(7);
        let childNode13 = new TreeNode<number>(8);
        childNode6.addChild(childNode12)
        childNode6.addChild(childNode13)

        let childNode14 = new TreeNode<number>(5);
        let childNode15 = new TreeNode<number>(6);
        let childNode16 = new TreeNode<number>(7);
        childNode7.addChild(childNode14)
        childNode7.addChild(childNode15)
        childNode7.addChild(childNode16)

        expect(parentNode.find(5).length).toBe(4)
        expect(parentNode.find(6).length).toBe(5)
        expect(parentNode.find(7).length).toBe(4)
        expect(parentNode.find(8).length).toBe(1)
        expect(parentNode.find(1).length).toBe(1)
        expect(parentNode.find(2).length).toBe(1)
        expect(parentNode.find(3).length).toBe(0)
        expect(parentNode.find(4).length).toBe(0)

        expect(parentNode.getDepth()).toBe(4)
    });
})

