export interface IHashMap<T> {
    put(key: number, data: T): void;
    get(key: number): T[] | undefined;
    remove(key: number): boolean;
}

export class HashMap<T> implements IHashMap<T> {
    private maps = new Map<number, T[]>;

    put(key: number, data: T): void {
        if(this.maps.has(key))
        {
            const currentValue = this.get(key) as T[];
            if(!currentValue!.includes(data))
            {
                currentValue.push(data);
                this.maps.set(key, currentValue);
            }
        }
        else
        {
            this.maps.set(key, [data]);
        }
    }

    get(key: number): T[] | undefined {
       return this.maps.get(key);
    }

    remove(key: number): boolean {
        return this.maps.delete(key)
    }

    printInfor(): void {
        console.log(this.maps)
    }
};
