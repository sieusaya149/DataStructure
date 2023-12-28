
export interface IHashSet<T> {
    add(data: T): void;
    remove(data:T): void;
    contains(data: T): boolean;
}
export class HashSet<T> implements IHashSet<T> {
    private setList = new Set();

    add(data: T): void {
        this.setList.add(data)
    }

    remove(data: T): void {
        if(this.setList.delete(data)){
            console.log('DELETE success')
        }
        else {
            console.log('DELETE failure')
        }
    }

    contains(data: T): boolean {
        return this.setList.has(data);
    }

    getSetListData()
    {
        const arr = []
        for(let item of this.setList)
        {
            arr.push(item)
        }
        return arr
    }

    printInfor(): void {
        console.log(this.setList);
    }
};


