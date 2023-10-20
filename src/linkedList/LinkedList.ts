import { assert } from "console";
import { Node } from "./Node";
export interface ILinkedList<T> {
    insertAtBegin(data: T): Node<T>;
    insertAtIndex(data:T, index:number): Node<T> | void;
    insertAtLast(data: T): Node<T>;
    deleteAtBegin(): boolean
    deleteAtLast(): boolean
    deleteAtIndex(index: number): boolean
    getHead(): T | null;
    getTail(): T | null;
    getAtIndex(index: number): T | null;
    traverse(): T[];
    size(): number;
    updateHead(data: T): boolean;
    updateTail(data: T): boolean;
    updateAtIndex(data: T, index: number): boolean;
    isEmpty(): boolean;
}

export class SingleLinkedList<T> implements ILinkedList<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;

    getHead(): T | null{
        if(this.isEmpty())
        {
            console.warn("The linked list is empty")
            return null
        }
        return this.head!.data
    }

    getTail(): T | null{
        if(this.isEmpty())
        {
            console.warn("The linked list is empty")
            return null
        }
        return this.tail!.data
    }

    getAtIndex(index: number): T | null
    {
        if(!this.isValidIndex(index))
        {
            throw new Error("The index is out of bound")
        }

        if(this.isEmpty())
        {
            console.warn("The linked list is empty")
            return null
        }
        if(index == 0)
        {
            return this.getHead()
        }
        if(index == this.size() - 1)
        {
            return this.getTail()
        }
        let trav = this.head
        let cntIndex = 0
        while(trav)
        {
            if(cntIndex == index)
            {
                return trav.data
            }
            cntIndex++
            trav = trav.next
        }
        console.warn(`Can not get element and index ${index}`)
        return null

    }

    updateHead(data: T): boolean {
        if(this.isEmpty())
        {
            console.warn("The linked list is empty")
            return false
        }
        this.head!.data = data
        return true
    }

    updateTail(data: T): boolean {
        if(this.isEmpty())
        {
            console.warn("The linked list is empty")
            return false
        }
        this.tail!.data = data
        return true
    }

    updateAtIndex(data: T, index: number): boolean {
        if(!this.isValidIndex(index))
        {
            throw new Error("The index is out of bound")
        }
        if(this.isEmpty())
        {
            console.warn("The linked list is empty")
            return false
        }
        if(index == 0)
        {
            return this.updateHead(data)
        }
        if(index == this.size() - 1)
        {
            return this.updateTail(data)
        }
        let trav = this.head
        let cntIndex = 0
        while(trav)
        {
            if(cntIndex == index)
            {
                trav.data = data
                return true
            }
            cntIndex++
            trav = trav.next
        }
        throw new Error(`Can not update the element at index ${index}`)
    }

    private isValidIndex(index: number, insertContext: boolean = false): boolean {
        if(index < 0 || (insertContext && index > this.size()) || (!insertContext && index > this.size() - 1) )
        {
            console.log(`index is ${index}`)
            return false
        }
        return true
    }


    public insertAtBegin(data: T): Node<T> {
        const newNode = new Node(data)
        if(this.isEmpty())
        {
            console.log("No head, no tail, the new element to be a head and tail")
            this.head = newNode
            this.tail = this.head
        }
        else
        {
            console.log("Already has head, the new element is to be a new head")
            newNode.next = this.head
            this.head = newNode
        }
        return this.head
    }

    public insertAtLast(data: T): Node<T> {
        if(this.isEmpty())
        {
            return this.insertAtBegin(data)
        }
        else
        {
            const newNode = new Node(data)
            this.tail!.next = newNode
            this.tail = newNode
            return this.tail
        }
    }

    public insertAtIndex(data: T, index: number): Node<T> | void {
        const size = this.size()
        if(!this.isValidIndex(index, true))
        {
            throw new Error("The index is out of bound")
        }
        if(index == 0)
        {
            return this.insertAtBegin(data)
        }
        if(index == size)
        {
            return this.insertAtLast(data)
        }
        let cntIndex = 0
        let trav = this.head
        while(trav)
        {
            if(cntIndex + 1== index)
            {
                const newNode = new Node(data)
                newNode.next = trav.next
                trav.next = newNode
                return newNode
            }
            cntIndex++
            trav = trav.next
        }
        throw new Error(`Why we can not insert to index ${index}`)
        
    }
     
    public traverse(): T[] {
        let listNodeData: T[] = []
        if(this.isEmpty())
        {
            console.log("the link list is empty")
            return listNodeData
        }
        let trav = this.head!
        while(trav)
        {
            listNodeData.push(trav.data)
            trav = trav.next!
        }
        return listNodeData

    }

    size(): number {
        return this.traverse().length
    }

    deleteAtBegin(): boolean
    {
        if(this.isEmpty())
        {
            console.warn("there is no element to delete")
            return false
        }
        if(this.size() == 1)
        {
            this.head = this.tail = null
            return true
        }
        this.head = this.head?.next!
        return true
    }

    deleteAtLast(): boolean
    {
        if(this.isEmpty())
        {
            console.warn("there is no element to delete")
            return false
        }
        if(this.size() == 1)
        {
            this.head = this.tail = null
            return true
        }
        let trav = this.head
        let followTrav = null
        while(trav!.next) // when next is null break because this is a tail
        {
            followTrav = trav
            trav = trav!.next
        }
        followTrav!.next = null
        this.tail = followTrav
        return true
    }

    deleteAtIndex(index: number): boolean {
        const size = this.size()
        if(!this.isValidIndex(index))
        {
            throw new Error(`The index is out of bound`)
        }
        if(this.isEmpty())
        {
            console.warn("there is no element to delete")
            return false
        }
        if(index == 0)
        {
            return this.deleteAtBegin()
        }
        if(index == size - 1)
        {
            return this.deleteAtLast()
        }
        let trav = this.head
        let cntIndex = 0
        while(trav)
        {
            if(cntIndex + 1 == index)
            {
                // that mean skip the next element by connect the trav to the next of next node
                trav.next = trav!.next!.next
                return true
            }
            cntIndex++;
            trav = trav.next
        }
        console.warn(`Can not delete the element at index ${index}`)
        return false
    }


    public isEmpty(): boolean {
        return !this.head && !this.tail
    }
}
