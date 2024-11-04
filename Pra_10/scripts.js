const input = process.argv[2];
const number = parseInt(input);

if (isNaN(number) || /\D/.test(input)) {
  console.log(
    "Error: Please provide a valid number and avoid letters or special characters."
  );
} else {
  console.log(`Multiplication Table using for : ${number}:`);

  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
  console.log(`Multiplication Table using While loop : ${number}:`)
  console.log();
  let i = 1;
  while(i<= 10){
    console.log(`${number} x ${i} = ${number * i}`);
    i++;
  }
  console.log(`Multiplication Table using do-While loop : ${number}:`);
  console.log();
  let j = 1;
  do{
    console.log(`${number} x ${j} = ${number * j}`);
    j++;
  }while(j <= 10)
  
}
