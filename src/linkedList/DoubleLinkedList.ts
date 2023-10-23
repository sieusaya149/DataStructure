import { Node } from "./Node";

export interface IDoubleLinkedList<T> {
    //insertion
    pushFront(data: T): void;
    pushBack(data: T): void;
    insertAfter(index: number, data: T): boolean;
    insertBefore(index: number, data: T): boolean;
    insertAt(index: number, data: T): boolean;
    //delete
    popFront(): T | null;
    popBack(): T| null;
    popAt(index: number): T | null;
    //traverse
    traverse(): T[];
    reverse(): T[];
    //get
    getHead(): T|null;
    getTail(): T|null;
    size(): number;
    isEmpty(): boolean;

}

export class DoubleLinkedList<T> implements IDoubleLinkedList<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private isValidIndex(index: number, insertContext: boolean = false): boolean {
        if(index < 0 || (insertContext && index > this.size()) || (!insertContext && index > this.size() - 1) )
        {
            console.log(`index is ${index}`)
            return false
        }
        return true
    }

    public size() {
        return this.traverse().length
    }

    public getHead(): T|null
    {
        return this.head? this.head.data: null
    }

    public getTail(): T|null
    {
        return this.tail? this.tail.data: null
    }


    public isEmpty(): boolean {
        if(!this.head || !this.tail)
        {
            return true
        }
        return false
    }

    public traverse(): T[] {
        let listData: T[] = []
        if(this.isEmpty())
        {
            return listData
        }
        let trav = this.head
        while(trav)
        {
            listData.push(trav.data)
            trav = trav.next
        }
        return listData
    }

    public reverse(): T[]
    {
        let listData: T[] = []
        if(this.isEmpty())
        {
            return listData
        }
        let trav = this.tail
        while(trav)
        {
            listData.push(trav.data)
            trav = trav.prev
        }
        console.log(listData)
        return listData
    }


    public pushFront(data: T): void {
        const newNode = new Node(data)
        if(this.isEmpty())
        {
            this.head = this.tail = newNode
        }
        else
        {
            newNode.next = this.head
            this.head!.prev = newNode
            this.head = newNode
        }
    }

    public pushBack(data: T): void {
        if(this.isEmpty())
        {
            this.pushFront(data)
        }
        else
        {
            const newNode = new Node(data)
            this.tail!.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }    
    }

    private shoudStartFrHead(index:number):boolean
    {
        return index <= Math.floor(this.size()/2)
    }

    public insertAt(index: number, data: T): boolean {
        const size = this.size();
        if(!this.isValidIndex(index, true))
        {
            throw new Error("Index is out of bound")
        }
        if(index == 0)
        {
            this.pushFront(data)
            return true
        }
        else if(index == size)
        {
            this.pushBack(data)
            return true
        }
        const shouldFromHead = this.shoudStartFrHead(index)
        let trav = shouldFromHead? this.head : this.tail
        let cntIndex = shouldFromHead? 0 : size -1
        const newNode = new Node(data)
        while(trav)
        {
            if(cntIndex == index)
            {
                trav.prev!.next = newNode
                newNode.prev = trav.prev
                newNode.next = trav
                trav.prev = newNode
                return true
            }
            if(shouldFromHead)
            {
                cntIndex ++;
                trav = trav.next
            }
            else
            {
                cntIndex --;
                trav = trav.prev
            }
        }  
        return false      
    }

    insertBefore(index: number, data: T): boolean {
        if(!this.isValidIndex(index, true))
        {
            throw new Error("Index is out of bound")
        }
        return this.insertAt(index, data)
    }

    insertAfter(index: number, data: T): boolean {
        if(!this.isValidIndex(index))
        {
            throw new Error("Index is out of bound")
        }
        return this.insertAt(index + 1, data)
    }

    popFront(): T | null {
        if(this.isEmpty())
        {
            console.warn("The list is empty")
            return null
        }
        if(this.size() == 1)
        {
            const result = this.head
            this.head = this.tail = null
            return result!.data 
        }
        const result = this.head
        this.head = this.head!.next
        this.head!.prev = null
        return result!.data
    }

    popBack(): T | null {
        if(this.isEmpty())
        {
            console.warn("The list is empty")
            return null
        }
        if(this.size() == 1)
        {
            const result = this.head
            this.head = this.tail = null
            return result!.data 
        }
        const result = this.tail
        this.tail = this.tail!.prev
        this.tail!.next = null
        return result!.data
    }

    public popAt(index: number): T | null {
        if(!this.isValidIndex(index))
        {
            throw new Error("Index is out of bound")
        }
        if(index == 0)
        {
            return this.popFront()
        }
        const size = this.size()
        if(index == size - 1)
        {
            return this.popBack()
        }
        const shouldFromHead = this.shoudStartFrHead(index)
        let trav = shouldFromHead? this.head : this.tail
        let cntIndex = shouldFromHead? 0 : size -1
        while(trav)
        {
            if(cntIndex == index)
            {
                trav.prev!.next = trav.next
                trav.next!.prev = trav.prev
                return trav.data
            }
            if(shouldFromHead)
            {
                cntIndex ++;
                trav = trav.next
            }
            else
            {
                cntIndex --;
                trav = trav.prev
            }
        }  
        return null
    }

}
