import { merge, mergeSort, randomArray } from '../algorithms/MergeSort';

describe('testing merge', () => {

    it('should merge two arrays, and return one array with it\'s elements sorted', () => {
        expect(merge([1,3,5], [2,4,6])).toStrictEqual([1,2,3,4,5,6]);
        expect(merge([23, 45, 99], [6, 16, 17, 98])).toStrictEqual([6, 16, 17, 23, 45, 98, 99]);

    })
})

describe('testing merge sort', () => {

    
    it('should sort array', () => {
        let arr1 = randomArray(10);
        let sortedArr1 = [...arr1].sort((a, b) => a-b);
        let arr2 = randomArray(15);
        let sortedArr2 = [...arr2].sort((a, b) => a-b);

        expect(mergeSort(arr1)).toStrictEqual(sortedArr1);
        expect(mergeSort(arr2)).toStrictEqual(sortedArr2);
        expect(mergeSort([3, 1, 5, 10, 7, 99, 100, 78])).toStrictEqual([1, 3, 5, 7, 10, 78, 99, 100]);


    })
})