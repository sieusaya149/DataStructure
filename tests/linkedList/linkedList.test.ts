import { SingleLinkedList, ILinkedList } from '../../src/linkedList/LinkedList';

describe('SingleLinkedList', () => {
  let linkedList: ILinkedList<number>;

  beforeEach(() => {
    linkedList = new SingleLinkedList<number>();
  });

  it('Initial single linklist should be has size = 0 and empty', () => {
    expect(linkedList.size()).toBe(0)
    expect(linkedList.isEmpty()).toBe(true)
  });

  it('Insert element at beginning', () => {
    linkedList.insertAtBegin(1)
    expect(linkedList.isEmpty()).toBe(false)
    expect(linkedList.size()).toBe(1)
    linkedList.insertAtBegin(2)
    expect(linkedList.size()).toBe(2)
    expect(linkedList.traverse()).toEqual([2, 1])
  });

  it('Insert element at end', () => {
    linkedList.insertAtLast(1)
    expect(linkedList.isEmpty()).toBe(false)
    expect(linkedList.size()).toBe(1)
    linkedList.insertAtLast(2)
    expect(linkedList.size()).toBe(2)
    expect(linkedList.traverse()).toEqual([1, 2])
  });

  it('Insert element at index', () => {
    linkedList.insertAtLast(1)
    linkedList.insertAtLast(2)
    linkedList.insertAtLast(3)
    linkedList.insertAtLast(4)
    expect(linkedList.isEmpty()).toBe(false)
    expect(linkedList.size()).toBe(4)
    expect(linkedList.traverse()).toEqual([1,2,3,4])
    linkedList.insertAtIndex(-1,0)
    expect(linkedList.traverse()).toEqual([-1,1,2,3,4])
    linkedList.insertAtIndex(-2,4)
    expect(linkedList.traverse()).toEqual([-1,1,2,3,-2,4])
    linkedList.insertAtIndex(-3,6)
    expect(linkedList.traverse()).toEqual([-1,1,2,3,-2,4,-3])
    linkedList.insertAtIndex(-4,3)
    expect(linkedList.traverse()).toEqual([-1,1,2,-4,3,-2,4,-3])
  });

  it('Insert element and delete', () => {
    linkedList.insertAtLast(1)
    linkedList.insertAtLast(2)
    linkedList.insertAtLast(3)
    linkedList.insertAtLast(4)
    expect(linkedList.isEmpty()).toBe(false)
    expect(linkedList.size()).toBe(4)
    expect(linkedList.traverse()).toEqual([1,2,3,4])
    linkedList.insertAtIndex(-1,0)
    expect(linkedList.traverse()).toEqual([-1,1,2,3,4])
    linkedList.insertAtIndex(-2,4)
    expect(linkedList.traverse()).toEqual([-1,1,2,3,-2,4])
    linkedList.insertAtIndex(-3,6)
    expect(linkedList.traverse()).toEqual([-1,1,2,3,-2,4,-3])
    linkedList.insertAtIndex(-4,3)
    expect(linkedList.traverse()).toEqual([-1,1,2,-4,3,-2,4,-3])
    linkedList.deleteAtBegin();
    expect(linkedList.traverse()).toEqual([1,2,-4,3,-2,4,-3])
    linkedList.deleteAtBegin();
    expect(linkedList.traverse()).toEqual([2,-4,3,-2,4,-3])
  });

  it('Insert element and delete at begin', () => {
    linkedList.insertAtLast(1)
    linkedList.insertAtLast(2)
    linkedList.insertAtLast(3)
    linkedList.insertAtLast(4)
    expect(linkedList.isEmpty()).toBe(false)
    expect(linkedList.size()).toBe(4)
    expect(linkedList.traverse()).toEqual([1,2,3,4])

    linkedList.deleteAtBegin();
    expect(linkedList.traverse()).toEqual([2,3,4])
    expect(linkedList.getHead()).toBe(2)

    linkedList.deleteAtBegin();
    expect(linkedList.traverse()).toEqual([3,4])
    expect(linkedList.getHead()).toBe(3)

    linkedList.deleteAtBegin();
    expect(linkedList.traverse()).toEqual([4])
    expect(linkedList.getHead()).toBe(4)

    linkedList.deleteAtBegin();
    expect(linkedList.traverse()).toEqual([])
    expect(linkedList.getHead()).toBe(null)
    expect(linkedList.getTail()).toBe(null)

    // can not delete the first element in emply linklist, the funtion return false
    expect(linkedList.deleteAtBegin()).toBe(false);
    expect(linkedList.traverse()).toEqual([])
  });

  it('Insert element and delete at begin', () => {
    linkedList.insertAtLast(1)
    linkedList.insertAtLast(2)
    linkedList.insertAtLast(3)
    linkedList.insertAtLast(4)
    expect(linkedList.isEmpty()).toBe(false)
    expect(linkedList.size()).toBe(4)
    expect(linkedList.traverse()).toEqual([1,2,3,4])
    linkedList.deleteAtLast();
    expect(linkedList.traverse()).toEqual([1,2,3])
    expect(linkedList.getTail()).toBe(3)

    linkedList.deleteAtLast();
    expect(linkedList.traverse()).toEqual([1,2])
    expect(linkedList.getTail()).toBe(2)

    linkedList.deleteAtLast();
    expect(linkedList.traverse()).toEqual([1])
    expect(linkedList.getTail()).toBe(1)

    linkedList.deleteAtLast();
    expect(linkedList.traverse()).toEqual([])
    expect(linkedList.getTail()).toBe(null)

    linkedList.deleteAtLast();
    expect(linkedList.traverse()).toEqual([])
    expect(linkedList.getTail()).toBe(null)
  });

  it('Insert element and delete at begin, last and index', () => {
    linkedList.insertAtLast(1)
    linkedList.insertAtLast(2)
    linkedList.insertAtLast(3)
    linkedList.insertAtLast(4)
    linkedList.insertAtLast(5)
    linkedList.insertAtLast(6)
    expect(linkedList.isEmpty()).toBe(false)
    expect(linkedList.size()).toBe(6)
    expect(linkedList.traverse()).toEqual([1,2,3,4,5,6])
    expect(() => linkedList.deleteAtIndex(6)).toThrowError('The index is out of bound');

    linkedList.deleteAtBegin()
    expect(linkedList.traverse()).toEqual([2,3,4,5,6])
    expect(linkedList.getHead()).toBe(2)
    expect(() => linkedList.deleteAtIndex(5)).toThrowError('The index is out of bound');

    linkedList.deleteAtLast()
    expect(linkedList.traverse()).toEqual([2,3,4,5])
    expect(linkedList.getTail()).toBe(5)

    linkedList.deleteAtIndex(0)
    expect(linkedList.traverse()).toEqual([3,4,5])

    linkedList.deleteAtIndex(1)
    expect(linkedList.traverse()).toEqual([3,5])
    expect(linkedList.getHead()).toBe(3)
    expect(linkedList.getTail()).toBe(5)

    linkedList.deleteAtIndex(1)
    expect(linkedList.traverse()).toEqual([3])
    expect(linkedList.getHead()).toBe(3)
    expect(linkedList.getTail()).toBe(3)

    linkedList.deleteAtIndex(0)
    expect(linkedList.getHead()).toBe(null)
    expect(linkedList.getTail()).toBe(null)

    expect(() => linkedList.deleteAtIndex(1)).toThrowError('The index is out of bound');
    expect(() => linkedList.deleteAtIndex(-1)).toThrowError('The index is out of bound');

  });

  it('Insert and update data', () => {
    expect(linkedList.updateHead(10)).toBe(false)

    linkedList.insertAtLast(1)
    linkedList.insertAtLast(2)
    linkedList.insertAtLast(3)
    linkedList.insertAtLast(4)
    expect(linkedList.isEmpty()).toBe(false)
    expect(linkedList.size()).toBe(4)
    expect(linkedList.traverse()).toEqual([1,2,3,4])

    linkedList.updateHead(-1)
    expect(linkedList.isEmpty()).toBe(false)
    expect(linkedList.size()).toBe(4)
    expect(linkedList.traverse()).toEqual([-1,2,3,4])
    expect(linkedList.getHead()).toBe(-1)

    linkedList.updateTail(-4)
    expect(linkedList.isEmpty()).toBe(false)
    expect(linkedList.size()).toBe(4)
    expect(linkedList.traverse()).toEqual([-1,2,3,-4])
    expect(linkedList.getTail()).toBe(-4)

    linkedList.updateAtIndex(5, 0)
    expect(linkedList.size()).toBe(4)
    expect(linkedList.traverse()).toEqual([5,2,3,-4])
    expect(linkedList.getHead()).toBe(5)

    linkedList.updateAtIndex(6, 3)
    expect(linkedList.size()).toBe(4)
    expect(linkedList.traverse()).toEqual([5,2,3,6])
    expect(linkedList.getTail()).toBe(6)

    linkedList.updateAtIndex(-2, 1)
    expect(linkedList.size()).toBe(4)
    expect(linkedList.traverse()).toEqual([5,-2,3,6])
  });

  it('Insert then get data', () => {
    expect(linkedList.updateHead(10)).toBe(false)

    linkedList.insertAtLast(1)
    linkedList.insertAtLast(2)
    linkedList.insertAtLast(3)
    linkedList.insertAtLast(4)
    expect(linkedList.isEmpty()).toBe(false)
    expect(linkedList.size()).toBe(4)
    expect(linkedList.traverse()).toEqual([1,2,3,4])
    expect(linkedList.getAtIndex(0)).toEqual(linkedList.getHead())
    expect(linkedList.getAtIndex(3)).toEqual(linkedList.getTail())
    expect(linkedList.getAtIndex(0)).toBe(1)
    expect(linkedList.getAtIndex(1)).toBe(2)
    expect(linkedList.getAtIndex(2)).toBe(3)
    expect(linkedList.getAtIndex(3)).toBe(4)
    
    linkedList.deleteAtIndex(1)
    expect(linkedList.size()).toBe(3)
    expect(linkedList.traverse()).toEqual([1,3,4])
    expect(linkedList.getAtIndex(0)).toEqual(linkedList.getHead())
    expect(linkedList.getAtIndex(2)).toEqual(linkedList.getTail())
    expect(linkedList.getAtIndex(0)).toBe(1)
    expect(linkedList.getAtIndex(1)).toBe(3)
    expect(linkedList.getAtIndex(2)).toBe(4)

  });


});