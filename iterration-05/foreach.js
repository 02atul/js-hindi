// const coding = ["india","america ","japan"];

// coding.forEach( function(item) {
//     console.log(item);
// })

const coding = ["india","america ","japan"];

coding.forEach( function(item,index,arr) {
    // console.log(item,index,arr);
})

coding.forEach( (item)=>{
//   console.log(item);
} )

  const myArray = [
    {
        languaageName : "javascript",
        languaageNameFile : "js"
    },
    {
        languaageName: "C++",
        languaageNameFile: "cPP"
    },
    {
        languaageName: "python",
        languaageNameFile:"py"
    }
  ]

   myArray.forEach((item)=>{
    console.log(item.languaageName);
   })