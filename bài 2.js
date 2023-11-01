let array = [0, 1, 2, 4, 5]
let index = 3
function tryRemoveFromArray(array,index) {
    let newArr = []
    for (let i = 0; i < array.length; i++) {
        if (i !== index) {
            newArr.push(array[i]);
        }
    }
    return newArr;
}
console.log(tryRemoveFromArray(array,index));