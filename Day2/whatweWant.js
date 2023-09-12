const  whatWeWant =(arr,func)=>{
    let newArr = []
    for (let index = 0; index < arr.length; index++) {
     let newObj = func(arr[index])  
     newArr.push(newObj);
    }
    return newArr;
}
module.exports = whatWeWant