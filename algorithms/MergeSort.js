export function mergeSort(arr) {

    if(arr.length <= 1) return arr;
    let middle = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));
    return merge(left, right)
};

/**
 * 
 * @param {Number[]} arr1 array of sorted numbers
 * @param {Number[]} arr2 array of sorted numbers
 */
export function merge(arr1, arr2) {
    let sorted = [];
    let j = 0;
    let i = 0;

    while(i < arr1.length || j < arr2.length){
        if(arr1[i] < arr2[j] || j > arr2.length - 1) {
            sorted.push(arr1[i]);
            i++;
        } else if(arr2[j] < arr1[i] ||  i > arr1.length - 1 ){
            sorted.push(arr2[j]);
            j++;
        }
    }
    return sorted;
}


export function randomArray(n){
    let arr = [];
    while(n > 0) {
        arr.push(Math.floor(Math.random() * 10000));
        n--;
    }
    return arr;
}