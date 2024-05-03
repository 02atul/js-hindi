// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     console.log(element);
// }

// for (let i = 0; i < 10; i++) {
//    console.log(`index value is ${i}`);
    
// }

for (let i = 1; i <= 10; i++) {
    //  console.log(`table  ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner value is ${j} and outer ${i}`);
        // console.log(`${i} * ${j} table is ${i*j}`);
    }
    
}

// for (let i = 0; i < 10; i++) {
//       if(i==5){
//         console.log(`favourie number ${i}`);
//         break;
//       }
//     console.log(i);
// }
for (let i = 0; i < 10; i++) {
    if(i==5){
      console.log(`favourie number ${i}`);
      continue;
    }
  console.log(i);
}