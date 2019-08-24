const mergeSort = require('./index');

test('Merge Sort function is defined', ()=>{
    expect(typeof mergeSort).toEqual('function');
})

test('Merge Sort returns a sorted array', ()=> {
    const sortedArray = mergeSort([4,1,9]);
    expect(sortedArray).toEqual([1,4,9]);
});