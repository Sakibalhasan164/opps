// const array=["jkjfd","name","dkfj"]

// const map = array.map((x) => x + "jfkdj");
// // console.log(map);
// const numbers=[3,4,5,6,7,8,9,10]

// const mapNumbers=numbers.map((num)=>{
//  return Math.log10(num).toFixed(2)
// })

// console.log(mapNumbers);




const object=[
    {key:1,value:1},
    {key:2,value:2},
    {key:3,value:3},
]

const objectMap=object.map((obj)=>{
    let rObj = {}
    rObj["key"] = obj.key
    return rObj
})

console.log(objectMap);