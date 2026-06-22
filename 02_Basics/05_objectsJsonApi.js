const course={
    name: "javascript",
    price: "999",
    teacher:"abcd"
}
console.log(course.teacher)//abcd
// const{teacher}=course
// console.log(teacher)//abcd

const{teacher: master}=course
console.log(master)//abcd

// {
//     name: "javascript",
//     price: "999",
//     teacher:"abcd"
// }error as an object has a name too so its automatically treated as JSON
// in JSON
// {
//     "name": "javascript",
//     "price": "999",
//     "teacher":"abcd"
// }
//array api calls
// [
//     {},
//     {},
//     {}
// ]