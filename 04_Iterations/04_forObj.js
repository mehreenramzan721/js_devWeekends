const obj1={
    'js': ' javascript',
    'cpp':'c++',
    'rb': 'rubie',
    'swift': 'swift ab'
}

// for( const key in obj1){
//     console.log(key)
// }//js cpp rb swift

// for( const key in obj1){
//     console.log(obj1[key])
// }//javascript c++ rubie swift ab

// for in loop in arrays
const arr=[1,2,3,4]
for (const array in arr){
    console.log(array)
}//0 1 2 3

for (const array in arr){
    console.log(arr[array])
}//1 2 3 4