const mergeSort = require('./index');

test('Merge Sort function is defined', ()=>{
    expect(typeof mergeSort).toEqual('function');
})

test('Merge Sort returns a sorted array', ()=> {
    const sortedArray = mergeSort([4,1,9]);
    console.log(sortedArray);
    expect(sortedArray).toEqual([1,4,9]);
});

test('Merge Sort returns another sorted array', ()=> {
    const sortedArray = mergeSort([5,2,9,1,8,23,12,3,56,90]);
    expect(sortedArray).toEqual([1,2,3,5,8,9,12,23,56,90]);
});