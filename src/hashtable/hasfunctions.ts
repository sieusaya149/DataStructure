export class HashFunction
{
    static HashByDivider(i: number, data: number): number {
        return data % i; 
    }
}