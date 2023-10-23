import {DoubleLinkedList, IDoubleLinkedList} from '../../src/linkedList/DoubleLinkedList'

describe('SingleLinkedList', () => {
    let dbLinkedList: IDoubleLinkedList<number>;
  
    beforeEach(() => {
        dbLinkedList = new DoubleLinkedList<number>();
    });

    it('Initial double linklist should be has size = 0 and empty', () => {
        expect(dbLinkedList.size()).toBe(0)
        expect(dbLinkedList.isEmpty()).toBe(true)
    });

    it('Push And Insert At to linked list', () => {
        dbLinkedList.pushFront(1)
        expect(dbLinkedList.size()).toBe(1)
        expect(dbLinkedList.isEmpty()).toBe(false)
        expect(dbLinkedList.traverse()).toEqual([1])
        expect(dbLinkedList.traverse()).toEqual([1])

        dbLinkedList.pushFront(2)
        expect(dbLinkedList.size()).toBe(2)
        expect(dbLinkedList.traverse()).toEqual([2,1])
        expect(dbLinkedList.reverse()).toEqual([1,2])

        dbLinkedList.pushBack(3)
        expect(dbLinkedList.size()).toBe(3)
        expect(dbLinkedList.traverse()).toEqual([2,1,3])
        expect(dbLinkedList.reverse()).toEqual([3,1,2])

        dbLinkedList.pushBack(5)
        expect(dbLinkedList.size()).toBe(4)
        expect(dbLinkedList.traverse()).toEqual([2,1,3,5])
        expect(dbLinkedList.reverse()).toEqual([5,3,1,2])

        dbLinkedList.insertAt(1,6)
        expect(dbLinkedList.size()).toBe(5)
        expect(dbLinkedList.traverse()).toEqual([2,6,1,3,5])
        expect(dbLinkedList.reverse()).toEqual([5,3,1,6,2])

        dbLinkedList.insertAt(0,7)
        expect(dbLinkedList.size()).toBe(6)
        expect(dbLinkedList.traverse()).toEqual([7,2,6,1,3,5])
        expect(dbLinkedList.reverse()).toEqual([5,3,1,6,2,7])

        dbLinkedList.insertAt(6,8)
        expect(dbLinkedList.size()).toBe(7)
        expect(dbLinkedList.traverse()).toEqual([7,2,6,1,3,5,8])
        expect(dbLinkedList.reverse()).toEqual([8,5,3,1,6,2,7])

        expect(() => dbLinkedList.insertAt(-1,8)).toThrowError("Index is out of bound")
        expect(() => dbLinkedList.insertAt(8,8)).toThrowError("Index is out of bound")

        dbLinkedList.insertAt(6,9)
        expect(dbLinkedList.size()).toBe(8)
        expect(dbLinkedList.traverse()).toEqual([7,2,6,1,3,5,9,8])
        expect(dbLinkedList.reverse()).toEqual([8,9,5,3,1,6,2,7])

        dbLinkedList.insertAt(6,10)
        expect(dbLinkedList.size()).toBe(9)
        expect(dbLinkedList.traverse()).toEqual([7,2,6,1,3,5,10,9,8])
        expect(dbLinkedList.reverse()).toEqual([8,9,10,5,3,1,6,2,7])


    });

    it('Push to linked list', () => {
        dbLinkedList.pushBack(1)
        dbLinkedList.pushBack(2)
        dbLinkedList.pushBack(3)
        dbLinkedList.pushBack(4)

        expect(dbLinkedList.size()).toBe(4)
        expect(dbLinkedList.isEmpty()).toBe(false)
        expect(dbLinkedList.traverse()).toEqual([1,2,3,4])
        expect(dbLinkedList.reverse()).toEqual([4,3,2,1])

        dbLinkedList.insertBefore(3,5)
        expect(dbLinkedList.size()).toBe(5)
        expect(dbLinkedList.traverse()).toEqual([1,2,3,5,4])

        dbLinkedList.insertBefore(5,6)
        expect(dbLinkedList.size()).toBe(6)
        expect(dbLinkedList.traverse()).toEqual([1,2,3,5,4,6])


        dbLinkedList.insertAfter(5,7)
        expect(dbLinkedList.size()).toBe(7)
        expect(dbLinkedList.traverse()).toEqual([1,2,3,5,4,6,7])

        dbLinkedList.insertAfter(0,-1)
        expect(dbLinkedList.size()).toBe(8)
        expect(dbLinkedList.traverse()).toEqual([1,-1,2,3,5,4,6,7])
        expect(dbLinkedList.reverse()).toEqual([7,6,4,5,3,2,-1,1])

        dbLinkedList.insertAfter(3,-2)
        expect(dbLinkedList.size()).toBe(9)
        expect(dbLinkedList.traverse()).toEqual([1,-1,2,3,-2,5,4,6,7])
        expect(dbLinkedList.reverse()).toEqual([7,6,4,5,-2,3,2,-1,1])
    })

    it('Delete front node in list', () => {
        dbLinkedList.pushBack(1)
        dbLinkedList.pushBack(2)
        dbLinkedList.pushBack(3)
        dbLinkedList.pushBack(4)

        expect(dbLinkedList.size()).toBe(4)
        expect(dbLinkedList.isEmpty()).toBe(false)
        expect(dbLinkedList.traverse()).toEqual([1,2,3,4])
        expect(dbLinkedList.reverse()).toEqual([4,3,2,1])

        expect(dbLinkedList.popFront()).toEqual(1)
        expect(dbLinkedList.size()).toBe(3)

        expect(dbLinkedList.popFront()).toEqual(2)
        expect(dbLinkedList.size()).toBe(2)

        expect(dbLinkedList.popFront()).toEqual(3)
        expect(dbLinkedList.size()).toBe(1)
    })

    it('Delete back node in list', () => {
        dbLinkedList.pushBack(1)
        dbLinkedList.pushBack(2)
        dbLinkedList.pushBack(3)
        dbLinkedList.pushBack(4)

        expect(dbLinkedList.size()).toBe(4)
        expect(dbLinkedList.isEmpty()).toBe(false)
        expect(dbLinkedList.traverse()).toEqual([1,2,3,4])
        expect(dbLinkedList.reverse()).toEqual([4,3,2,1])

        expect(dbLinkedList.popBack()).toEqual(4)
        expect(dbLinkedList.size()).toBe(3)
        expect(dbLinkedList.traverse()).toEqual([1,2,3])
        expect(dbLinkedList.reverse()).toEqual([3,2,1])

        expect(dbLinkedList.popBack()).toEqual(3)
        expect(dbLinkedList.size()).toBe(2)

        expect(dbLinkedList.popBack()).toEqual(2)
        expect(dbLinkedList.size()).toBe(1)
    })

    it('Delete at node in list', () => {
        dbLinkedList.pushBack(1)
        dbLinkedList.pushBack(2)
        dbLinkedList.pushBack(3)
        dbLinkedList.pushBack(4)

        expect(dbLinkedList.size()).toBe(4)
        expect(dbLinkedList.isEmpty()).toBe(false)
        expect(dbLinkedList.traverse()).toEqual([1,2,3,4])
        expect(dbLinkedList.reverse()).toEqual([4,3,2,1])

        expect(dbLinkedList.popAt(0)).toEqual(1)
        expect(dbLinkedList.size()).toBe(3)
        expect(dbLinkedList.traverse()).toEqual([2,3,4])
        expect(dbLinkedList.reverse()).toEqual([4,3,2])

        dbLinkedList.pushFront(1)
        expect(dbLinkedList.size()).toBe(4)
        expect(dbLinkedList.traverse()).toEqual([1,2,3,4])
        expect(dbLinkedList.reverse()).toEqual([4,3,2,1])

        expect(dbLinkedList.popAt(3)).toEqual(4)
        expect(dbLinkedList.size()).toBe(3)
        expect(dbLinkedList.traverse()).toEqual([1,2,3])
        expect(dbLinkedList.reverse()).toEqual([3,2,1])

        expect(dbLinkedList.popAt(1)).toEqual(2)
        expect(dbLinkedList.size()).toBe(2)
        expect(dbLinkedList.traverse()).toEqual([1,3])
        expect(dbLinkedList.reverse()).toEqual([3,1])

        expect(dbLinkedList.popAt(1)).toEqual(3)
        expect(dbLinkedList.size()).toBe(1)
        expect(dbLinkedList.traverse()).toEqual([1])
        expect(dbLinkedList.reverse()).toEqual([1])

    })

    it('get head and tail', () => {
        dbLinkedList.pushBack(1)
        dbLinkedList.pushBack(2)
        dbLinkedList.pushBack(3)
        dbLinkedList.pushBack(4)

        expect(dbLinkedList.size()).toBe(4)
        expect(dbLinkedList.isEmpty()).toBe(false)
        expect(dbLinkedList.traverse()).toEqual([1,2,3,4])
        expect(dbLinkedList.reverse()).toEqual([4,3,2,1])

        expect(dbLinkedList.getHead()).toBe(1)
        expect(dbLinkedList.getTail()).toBe(4)

        dbLinkedList.popFront()
        expect(dbLinkedList.getHead()).toBe(2)

        dbLinkedList.popFront()
        expect(dbLinkedList.getHead()).toBe(3)

    })

});